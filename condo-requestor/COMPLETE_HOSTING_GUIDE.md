# Complete Hosting & Roblox Setup Guide

## Part 1: Download & Extract Bot Files

Your complete bot package is in the `discord-bot-package` folder with all these files:

```
discord-bot-package/
├── index.js                    # Main bot file
├── config.json                # Configuration
├── package.json               # Dependencies
├── README.md                  # Project overview
├── BOT_PERMISSIONS.md         # Permission requirements
├── commands/
│   └── generate.js            # /generate command
├── utils/
│   ├── embedBuilder.js        # Discord embeds
│   └── fileManager.js         # File management
├── games/
│   ├── README.md              # Game files info
│   └── example_game.rbxlx     # Example file
├── REPLIT_SETUP_GUIDE.md      # Replit deployment
├── DISCORD_BOT_SETUP.md       # Discord configuration
└── COMPLETE_FILE_LIST.md      # File overview
```

## Part 2: Discord Bot Setup (5 minutes)

### Step 1: Create Discord Application
1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Name: "Roblox Game Generator"
4. Click "Create"

### Step 2: Create Bot
1. Go to "Bot" section in sidebar
2. Click "Add Bot"
3. Click "Reset Token"
4. **COPY AND SAVE THE TOKEN** - You'll need this
5. Keep this token secret!

### Step 3: Get Application ID
1. Go to "General Information" section
2. **COPY AND SAVE THE APPLICATION ID**

### Step 4: Set Bot Permissions
In Bot section, enable these permissions:
- Send Messages
- Use Slash Commands
- Embed Links
- Read Message History
- Attach Files

### Step 5: Invite Bot to Server
1. Go to "OAuth2" > "URL Generator"
2. Select scopes: `bot` and `applications.commands`
3. Select same permissions from Step 4
4. Copy generated URL and open in browser
5. Select your Discord server
6. Click "Authorize"

### Step 6: Get Server ID
1. In Discord: User Settings > Advanced > Enable "Developer Mode"
2. Right-click your server name
3. Click "Copy ID"
4. **SAVE THIS SERVER ID**

## Part 3: Hosting Options

### Option A: Replit (Recommended - Free)

**Setup Steps:**
1. Create account at replit.com
2. Create new "Node.js" repl
3. Upload all files from discord-bot-package folder
4. Delete default files, upload your bot files
5. In console: `npm install discord.js`
6. Go to "Secrets" tab (lock icon)
7. Add these secrets:
   - Key: `DISCORD_TOKEN`, Value: Your bot token
   - Key: `CLIENT_ID`, Value: Your application ID
   - Key: `GUILD_ID`, Value: Your server ID
8. Click "Run"

**Keep Online 24/7:**
- Go to uptimerobot.com
- Create free account
- Add HTTP monitor with your Replit URL
- Set interval to 5 minutes

### Option B: Railway (Free Tier)

**Setup Steps:**
1. Create account at railway.app
2. Connect your GitHub account
3. Upload bot files to GitHub repository
4. Create new project from GitHub
5. Add environment variables:
   - `DISCORD_TOKEN`
   - `CLIENT_ID` 
   - `GUILD_ID`
6. Deploy automatically

### Option C: Render (Free Tier)

**Setup Steps:**
1. Create account at render.com
2. Connect GitHub repository
3. Create new "Web Service"
4. Set build command: `npm install`
5. Set start command: `node index.js`
6. Add environment variables
7. Deploy

## Part 4: Adding Your Roblox Games

### Step 1: Prepare Game Files
1. Open Roblox Studio
2. Open your game project
3. Go to File > Save to File As
4. Save as .rbxlx format
5. Repeat for all games you want to include

### Step 2: Upload Game Files
1. In your hosting platform, go to the `games` folder
2. Upload your .rbxlx files
3. Name them descriptively (e.g., "racing_game.rbxlx")
4. Bot automatically detects new files

### Step 3: File Naming Tips
- Use descriptive names: `epic_tycoon.rbxlx`
- Avoid spaces, use underscores: `cool_game.rbxlx`
- Bot will format names automatically: "Cool Game"

## Part 5: Roblox Integration Notes

**Important:** This bot does NOT automatically upload games to Roblox. Here's what it does:

### What the Bot Does:
- Shows dropdown menu with your game files
- Creates "generation" announcements when someone selects a game
- Sends private file details to the requester
- Manages and organizes your local game files

### For Actual Roblox Publishing:
1. Use bot to select which game to work with
2. Download/access the selected .rbxlx file
3. Open file in Roblox Studio
4. Publish manually through Roblox Studio's publishing tools

### Why No Auto-Upload:
- Roblox requires manual authentication through their website
- Automated uploads would violate Roblox's terms of service
- Publishing requires Roblox Studio or manual upload

## Part 6: Testing Your Bot

### Step 1: Verify Bot is Online
Check hosting platform logs for:
- "✅ Loaded command: generate"
- "✅ Successfully reloaded application (/) commands"
- "🤖 Bot is ready! Logged in as [Bot Name]"

### Step 2: Test Commands
1. Go to your Discord server
2. Type `/generate`
3. Should see dropdown menu with your games
4. Select a game to test generation

### Step 3: Check Functionality
- Public announcement appears in channel
- Private details sent to you
- No error messages in console

## Part 7: Troubleshooting

### Bot Not Responding
- Check DISCORD_TOKEN is correct in secrets
- Verify bot has proper permissions in server
- Wait 5-10 minutes for commands to register

### No Games Showing
- Upload .rbxlx or .rbxl files to games folder
- Check file extensions are correct
- Restart bot after adding files

### Permission Errors
- Verify bot role has required permissions
- Check bot role is above @everyone in hierarchy
- Re-invite bot with correct permissions

## Download Instructions

To get your complete bot package:
1. Copy all files from the `discord-bot-package` folder
2. Download them to your local computer
3. Upload to your chosen hosting platform
4. Follow the hosting setup steps above

Your bot is completely ready to deploy - just get your Discord credentials and choose a hosting platform!