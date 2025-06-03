# Complete Replit Setup Guide

## Part 1: Get Discord Bot Credentials

### Step 1: Create Discord Application
1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Name: "Roblox Game Generator"
4. Click "Create"

### Step 2: Create Bot
1. Go to "Bot" section in left sidebar
2. Click "Add Bot"
3. Click "Reset Token" 
4. **COPY THE TOKEN** - you'll need this for Replit
5. Keep this token secret!

### Step 3: Get Application ID
1. Go to "General Information" section
2. **COPY THE APPLICATION ID** - you'll need this for Replit

### Step 4: Set Permissions
In Bot section, enable:
- Send Messages
- Use Slash Commands  
- Embed Links
- Attach Files
- Read Message History

### Step 5: Invite Bot to Server
1. Go to "OAuth2" > "URL Generator"
2. Select scopes: `bot` and `applications.commands`
3. Select same permissions from Step 4
4. Copy generated URL and open in browser
5. Select your Discord server
6. Click "Authorize"

### Step 6: Get Server ID
1. In Discord, go to User Settings > Advanced
2. Enable "Developer Mode"
3. Right-click your server name
4. Click "Copy ID"
5. **SAVE THIS SERVER ID** - you'll need it for Replit

---

## Part 2: Setup on Replit

### Step 1: Create Replit Account
1. Go to replit.com
2. Sign up for free account
3. Verify your email

### Step 2: Create New Repl
1. Click "Create Repl"
2. Select "Node.js" template
3. Name: "roblox-game-bot"
4. Click "Create Repl"

### Step 3: Upload Bot Files

**Delete default files first:**
- Delete `index.js` (we'll replace it)
- Delete `package.json` (if it exists)

**Create folder structure:**
1. Create folder: `commands`
2. Create folder: `utils` 
3. Create folder: `games`

**Upload these files to your repl:**

**Root directory files:**
- `index.js`
- `config.json`
- `DISCORD_BOT_SETUP.md`
- `setup-guide.md`

**commands folder:**
- `generate.js`

**utils folder:**
- `embedBuilder.js`
- `fileManager.js`

**games folder:**
- `README.md`
- `example_game.rbxlx`
- Add your own .rbxlx or .rbxl files here

### Step 4: Install Dependencies
In Replit console, run:
```bash
npm install discord.js
```

### Step 5: Configure Environment Variables
1. Click "Secrets" tab in left sidebar (lock icon)
2. Add these secrets:

**Secret 1:**
- Key: `DISCORD_TOKEN`
- Value: Your bot token from Discord Developer Portal

**Secret 2:**
- Key: `CLIENT_ID`
- Value: Your application ID from Discord Developer Portal

**Secret 3:**
- Key: `GUILD_ID`
- Value: Your Discord server ID

### Step 6: Run the Bot
1. Click "Run" button
2. You should see:
   - "✅ Loaded command: generate"
   - "✅ Successfully reloaded application (/) commands"
   - "🤖 Bot is ready! Logged in as [Bot Name]"

### Step 7: Test the Bot
1. Go to your Discord server
2. Type `/generate`
3. You should see dropdown menu with games
4. Select a game to test generation

---

## Part 3: Keep Bot Online 24/7

### Option 1: UptimeRobot (Free)
1. Go to uptimerobot.com
2. Create free account
3. Add new monitor:
   - Type: HTTP(s)
   - URL: Your Replit URL (copy from address bar)
   - Interval: 5 minutes
4. This pings your bot every 5 minutes to keep it awake

### Option 2: Replit Always On (Paid)
1. In your repl, click "Always On" tab
2. Purchase always-on hosting
3. Your bot stays online automatically

---

## File Structure You Need

```
roblox-game-bot/
├── index.js
├── config.json
├── commands/
│   └── generate.js
├── utils/
│   ├── embedBuilder.js
│   └── fileManager.js
├── games/
│   ├── README.md
│   ├── example_game.rbxlx
│   └── [your game files here]
└── docs/
    ├── DISCORD_BOT_SETUP.md
    └── setup-guide.md
```

---

## Troubleshooting

### "401: Unauthorized" Error
- Check DISCORD_TOKEN in Secrets is correct
- Make sure you copied the full token

### "Bot not responding to commands"
- Wait 5-10 minutes for Discord to register commands
- Check bot has proper permissions in your server
- Verify CLIENT_ID and GUILD_ID are correct

### "No games found"
- Add .rbxlx or .rbxl files to games folder
- Check file extensions are lowercase

### Bot goes offline
- Set up UptimeRobot monitoring
- Consider upgrading to Replit Always On

---

## Security Reminders

- Never share your Discord bot token
- Use Replit Secrets for all sensitive data
- Don't put tokens directly in code files
- Regenerate token if accidentally exposed

---

## Quick Start Checklist

- [ ] Discord application created
- [ ] Bot token obtained
- [ ] Application ID obtained  
- [ ] Server ID obtained
- [ ] Bot invited to Discord server
- [ ] Replit account created
- [ ] All files uploaded to Replit
- [ ] Dependencies installed (`npm install discord.js`)
- [ ] Secrets configured in Replit
- [ ] Bot running successfully
- [ ] Commands tested in Discord
- [ ] UptimeRobot monitoring setup

Once you complete all steps, your bot will be fully functional!