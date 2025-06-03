# Roblox Game Generator Discord Bot

A Discord bot that provides an interactive menu for selecting and managing Roblox game files.

## Features

- `/generate` command with modern dropdown menu
- File management for .rbxlx and .rbxl files
- Fancy embed messages for game generation
- Public announcements and private details
- Automatic file detection and organization

## Quick Setup

1. **Get Discord Bot Credentials** (see DISCORD_BOT_SETUP.md)
2. **Deploy to Replit** (see REPLIT_SETUP_GUIDE.md)
3. **Add Your Game Files** to the games/ folder
4. **Test the Bot** with /generate command

## File Structure

```
discord-bot-package/
├── index.js                 # Main bot file
├── config.json             # Bot configuration
├── package.json            # Dependencies
├── commands/
│   └── generate.js         # Generate command
├── utils/
│   ├── embedBuilder.js     # Discord embeds
│   └── fileManager.js      # File management
├── games/
│   ├── README.md           # Game files info
│   └── example_game.rbxlx  # Example file
└── docs/
    ├── REPLIT_SETUP_GUIDE.md
    ├── DISCORD_BOT_SETUP.md
    └── COMPLETE_FILE_LIST.md
```

## Installation

1. Upload all files to your hosting platform
2. Run: `npm install`
3. Configure environment variables
4. Start with: `node index.js`

## Environment Variables

Required secrets:
- `DISCORD_TOKEN` - Your Discord bot token
- `CLIENT_ID` - Your Discord application ID
- `GUILD_ID` - Your Discord server ID (optional)

## Usage

1. Type `/generate` in Discord
2. Select a game from the dropdown menu
3. Bot announces generation publicly
4. Requester receives private details

## Support

Check the setup guides for detailed instructions on configuration and deployment.