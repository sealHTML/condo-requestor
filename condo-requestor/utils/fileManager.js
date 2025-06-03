const fs = require('fs');
const path = require('path');
const config = require('../config.json');

class FileManager {
    static getGamesDirectory() {
        const gamesDir = path.resolve(config.settings.gamesDirectory);
        
        // Create games directory if it doesn't exist
        if (!fs.existsSync(gamesDir)) {
            fs.mkdirSync(gamesDir, { recursive: true });
        }
        
        return gamesDir;
    }

    static getGameFiles() {
        try {
            const gamesDir = this.getGamesDirectory();
            const files = fs.readdirSync(gamesDir);
            
            const gameFiles = files
                .filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return config.settings.allowedFileExtensions.includes(ext);
                })
                .map(file => {
                    const filePath = path.join(gamesDir, file);
                    const stats = fs.statSync(filePath);
                    
                    return {
                        fileName: file,
                        displayName: this.formatDisplayName(file),
                        filePath: filePath,
                        size: this.formatFileSize(stats.size),
                        lastModified: stats.mtime.toLocaleDateString(),
                        created: stats.birthtime,
                        isRbxlx: path.extname(file).toLowerCase() === '.rbxlx'
                    };
                })
                .sort((a, b) => b.created - a.created); // Sort by creation date, newest first

            return gameFiles;
        } catch (error) {
            console.error('Error reading game files:', error);
            return [];
        }
    }

    static getGameInfo(fileName) {
        try {
            const gameFiles = this.getGameFiles();
            return gameFiles.find(file => file.fileName === fileName) || null;
        } catch (error) {
            console.error('Error getting game info:', error);
            return null;
        }
    }

    static formatDisplayName(fileName) {
        // Remove file extension and format the name
        const nameWithoutExt = path.parse(fileName).name;
        
        // Replace underscores and hyphens with spaces
        let formatted = nameWithoutExt.replace(/[_-]/g, ' ');
        
        // Capitalize first letter of each word
        formatted = formatted.replace(/\b\w/g, char => char.toUpperCase());
        
        return formatted;
    }

    static formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    static validateGameFile(fileName) {
        try {
            const gameInfo = this.getGameInfo(fileName);
            if (!gameInfo) {
                return { valid: false, error: 'Game file not found' };
            }

            // Check if file still exists
            if (!fs.existsSync(gameInfo.filePath)) {
                return { valid: false, error: 'Game file no longer exists' };
            }

            // Check file extension
            const ext = path.extname(gameInfo.fileName).toLowerCase();
            if (!config.settings.allowedFileExtensions.includes(ext)) {
                return { valid: false, error: 'Invalid file extension' };
            }

            return { valid: true, gameInfo };
        } catch (error) {
            return { valid: false, error: 'Error validating game file' };
        }
    }

    static getGameStats() {
        try {
            const gameFiles = this.getGameFiles();
            
            return {
                totalGames: gameFiles.length,
                rbxlxFiles: gameFiles.filter(file => file.isRbxlx).length,
                rbxlFiles: gameFiles.filter(file => !file.isRbxlx).length,
                totalSize: gameFiles.reduce((total, file) => {
                    const stats = fs.statSync(file.filePath);
                    return total + stats.size;
                }, 0)
            };
        } catch (error) {
            console.error('Error getting game stats:', error);
            return {
                totalGames: 0,
                rbxlxFiles: 0,
                rbxlFiles: 0,
                totalSize: 0
            };
        }
    }
}

module.exports = FileManager;
