# Complete Discord Bot Files

Here are ALL the files you need for your Roblox Game Generator Discord bot:

## Files to Upload to Replit

### 1. Root Directory Files

**index.js** - Main bot file
**config.json** - Configuration settings
**REPLIT_SETUP_GUIDE.md** - Complete setup instructions
**DISCORD_BOT_SETUP.md** - Discord configuration guide

### 2. commands/ folder

**commands/generate.js** - The /generate command implementation

### 3. utils/ folder

**utils/embedBuilder.js** - Creates fancy Discord embeds
**utils/fileManager.js** - Manages game files

### 4. games/ folder

**games/README.md** - Instructions for adding game files
**games/example_game.rbxlx** - Example Roblox game file

## Quick Setup Summary

### Discord Setup (5 minutes)
1. Go to https://discord.com/developers/applications
2. Create new application
3. Create bot and copy token
4. Copy application ID
5. Invite bot to your server

### Replit Setup (5 minutes)
1. Create Node.js repl at replit.com
2. Upload all files above
3. Run: `npm install discord.js`
4. Add secrets: DISCORD_TOKEN, CLIENT_ID, GUILD_ID
5. Click Run

### Add Your Games
1. Upload .rbxlx or .rbxl files to games/ folder
2. Bot automatically detects them

## What the Bot Does

- Shows dropdown menu with your game files
- Creates fancy announcements when games are "generated" 
- Sends private details to the person who requested
- Manages file information (size, date, type)

## Keep Online 24/7

Use uptimerobot.com to ping your Replit URL every 5 minutes (free)

## File Contents Ready

All files are configured and ready to use. Just follow the setup guide to get your Discord credentials and upload to Replit.