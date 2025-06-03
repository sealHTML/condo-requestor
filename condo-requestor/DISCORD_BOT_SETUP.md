# Complete Discord Bot Setup Guide

## Step-by-Step Configuration

### 1. Create Discord Application

1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Name your bot (e.g., "Roblox Game Generator")
4. Click "Create"

### 2. Get Bot Token

1. Go to "Bot" section in left sidebar
2. Click "Add Bot" if needed
3. Under "Token" section, click "Reset Token"
4. Copy the new token (keep this secret!)

### 3. Get Application ID

1. Go to "General Information" section
2. Copy the "Application ID" (also called Client ID)

### 4. Set Bot Permissions

In the "Bot" section, enable these permissions:
- Send Messages
- Use Slash Commands
- Embed Links
- Attach Files
- Read Message History

### 5. Invite Bot to Server

1. Go to "OAuth2" > "URL Generator"
2. Select scopes: `bot` and `applications.commands`
3. Select the same permissions from step 4
4. Copy generated URL and open in browser
5. Select your server and authorize

### 6. Configure Bot Credentials

Replace values in `config.json`:
```json
{
    "token": "YOUR_ACTUAL_BOT_TOKEN_HERE",
    "clientId": "YOUR_ACTUAL_CLIENT_ID_HERE",
    "guildId": "YOUR_SERVER_ID_HERE"
}
```

To get Server ID:
1. Enable Developer Mode in Discord settings
2. Right-click your server name
3. Select "Copy ID"

---

# How the Bot Works

## File Management System

The bot manages Roblox game files in your `games` folder:

1. **File Detection**: Automatically finds .rbxlx and .rbxl files
2. **Modern Interface**: Shows dropdown menu with formatted names
3. **File Information**: Displays size, date, and type for each game

## Generation Process

When someone uses `/generate`:

1. **Selection Menu**: Shows all available game files in a dropdown
2. **File Selection**: User picks a game from the menu
3. **Public Announcement**: Sends a fancy embed to the channel announcing generation
4. **Private Details**: Sends detailed file info privately to the requester

## What Actually Happens

The bot creates a realistic simulation of game generation but does NOT upload files to Roblox. This is because:
- Roblox requires manual authentication
- Automated uploads violate platform terms
- Publishing needs Roblox Studio or roblox.com

---

# Free Hosting Setup

## Option 1: Replit (Easiest)

1. Create account at replit.com
2. Create new Node.js repl
3. Upload all bot files
4. In Secrets tab, add:
   - `DISCORD_TOKEN`: Your bot token
   - `CLIENT_ID`: Your application ID
5. Run with: `node index.js`

**Keep Online**: Use UptimeRobot to ping your repl URL every 5 minutes

## Option 2: Railway

1. Create account at railway.app
2. Create new project from GitHub
3. Add environment variables:
   - `DISCORD_TOKEN`
   - `CLIENT_ID`
4. Deploy automatically

## Option 3: Render

1. Create account at render.com
2. Connect GitHub repository
3. Create Web Service
4. Add environment variables
5. Deploy

---

# Testing Your Bot

## 1. Add Game Files

Place .rbxlx or .rbxl files in the `games` folder

## 2. Start Bot

Run: `node index.js`

Look for these success messages:
- "✅ Loaded command: generate"
- "✅ Successfully reloaded application (/) commands"
- "🤖 Bot is ready!"

## 3. Test Command

1. Go to your Discord server
2. Type `/generate`
3. Select a game from dropdown
4. Check both public announcement and private details

---

# Troubleshooting

## "401: Unauthorized" Error
- Check your bot token is correct
- Make sure token is in config.json or environment variables

## "Bot not responding"
- Verify bot has proper permissions
- Check bot is online in your server member list

## "No games found"
- Add .rbxlx or .rbxl files to games folder
- Check file extensions are correct

## Commands not showing
- Wait a few minutes for Discord to update
- Try kicking and re-inviting the bot

---

# Security Notes

- Never share your bot token publicly
- Use environment variables on hosting platforms
- Keep your config.json out of public repositories
- Regenerate token if accidentally exposed