# Discord Bot Permissions Required

## Essential Permissions

Your Discord bot needs these specific permissions to function properly:

### Text Permissions
- **Send Messages** - Required to send responses and embeds
- **Use Slash Commands** - Required for the /generate command to work
- **Embed Links** - Required to send fancy embed messages
- **Read Message History** - Allows bot to see previous messages

### Additional Permissions
- **Attach Files** - Optional, for future file sharing features
- **Mention Everyone** - Optional, if you want @everyone announcements

## How to Set Permissions

### Method 1: During Bot Invitation
1. Go to Discord Developer Portal > OAuth2 > URL Generator
2. Select scopes: `bot` and `applications.commands`
3. Select these bot permissions:
   - Send Messages
   - Use Slash Commands
   - Embed Links
   - Read Message History
   - Attach Files
4. Use generated URL to invite bot

### Method 2: After Bot is in Server
1. Go to your Discord server settings
2. Click "Roles"
3. Find your bot's role
4. Enable the same permissions listed above

## Permission Codes (for developers)

If you need the permission integer:
- Send Messages: `2048`
- Use Slash Commands: `2147483648`
- Embed Links: `16384`
- Read Message History: `65536`
- Attach Files: `32768`

Combined permissions integer: `2147581952`

## Troubleshooting

### Bot not responding to /generate
- Verify "Use Slash Commands" is enabled
- Check "Send Messages" permission exists
- Wait 5-10 minutes for Discord to register commands

### Embeds not showing properly
- Enable "Embed Links" permission
- Check bot role is above @everyone in role hierarchy

### Commands not appearing
- Ensure bot has "Use Slash Commands" permission
- Try kicking and re-inviting the bot with correct permissions

## Minimum Required Setup

For basic functionality, your bot absolutely needs:
1. **Send Messages** - To respond to commands
2. **Use Slash Commands** - To register /generate command
3. **Embed Links** - To display the game selection interface

These three permissions are the bare minimum for the bot to work.