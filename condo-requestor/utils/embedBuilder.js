const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

class EmbedBuilderUtil {
    static createGameGeneratedEmbed(gameInfo, user) {
        const embed = new EmbedBuilder()
            .setColor('#00ff88')
            .setTitle('🎮 Game Generated Successfully!')
            .setDescription(`**${gameInfo.displayName}** has been generated and is ready to play!`)
            .addFields(
                { name: '📁 File Name', value: `\`${gameInfo.fileName}\``, inline: true },
                { name: '📊 File Size', value: gameInfo.size, inline: true },
                { name: '📅 Last Modified', value: gameInfo.lastModified, inline: true },
                { name: '👤 Requested by', value: user.toString(), inline: true },
                { name: '⏰ Generated at', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true },
                { name: '🔗 Status', value: '✅ Ready to play', inline: true }
            )
            .setTimestamp()
            .setFooter({ 
                text: 'Roblox Game Generator', 
                iconURL: user.displayAvatarURL({ dynamic: true })
            });

        // Add thumbnail based on file type
        if (gameInfo.isRbxlx) {
            embed.setThumbnail('https://via.placeholder.com/128x128/00ff88/ffffff?text=RBXLX');
        } else {
            embed.setThumbnail('https://via.placeholder.com/128x128/0099ff/ffffff?text=RBXL');
        }

        return embed;
    }

    static createErrorEmbed(title, description, error = null) {
        const embed = new EmbedBuilder()
            .setColor('#ff6b6b')
            .setTitle(`❌ ${title}`)
            .setDescription(description)
            .setTimestamp()
            .setFooter({ text: 'Roblox Game Generator' });

        if (error) {
            embed.addFields({ name: 'Error Details', value: `\`${error}\``, inline: false });
        }

        return embed;
    }

    static createInfoEmbed(title, description, fields = []) {
        const embed = new EmbedBuilder()
            .setColor(config.settings.embedColor)
            .setTitle(`ℹ️ ${title}`)
            .setDescription(description)
            .setTimestamp()
            .setFooter({ text: 'Roblox Game Generator' });

        if (fields.length > 0) {
            embed.addFields(...fields);
        }

        return embed;
    }

    static createSuccessEmbed(title, description, fields = []) {
        const embed = new EmbedBuilder()
            .setColor('#00ff88')
            .setTitle(`✅ ${title}`)
            .setDescription(description)
            .setTimestamp()
            .setFooter({ text: 'Roblox Game Generator' });

        if (fields.length > 0) {
            embed.addFields(...fields);
        }

        return embed;
    }

    static createWarningEmbed(title, description, fields = []) {
        const embed = new EmbedBuilder()
            .setColor('#ffb347')
            .setTitle(`⚠️ ${title}`)
            .setDescription(description)
            .setTimestamp()
            .setFooter({ text: 'Roblox Game Generator' });

        if (fields.length > 0) {
            embed.addFields(...fields);
        }

        return embed;
    }

    static createStatsEmbed(stats) {
        return new EmbedBuilder()
            .setColor(config.settings.embedColor)
            .setTitle('📊 Game Statistics')
            .setDescription('Current statistics for the Roblox Game Generator')
            .addFields(
                { name: '🎮 Total Games', value: stats.totalGames.toString(), inline: true },
                { name: '📁 RBXLX Files', value: stats.rbxlxFiles.toString(), inline: true },
                { name: '📄 RBXL Files', value: stats.rbxlFiles.toString(), inline: true },
                { name: '💾 Total Size', value: this.formatFileSize(stats.totalSize), inline: true }
            )
            .setTimestamp()
            .setFooter({ text: 'Roblox Game Generator' });
    }

    static formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

module.exports = EmbedBuilderUtil;
