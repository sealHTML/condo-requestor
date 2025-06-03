# Roblox Game Files Directory

This directory is where you should place your Roblox game files (.rbxlx and .rbxl files) that you want to make available through the Discord bot.

## Supported File Types
- `.rbxlx` - Roblox Place Files (XML format)
- `.rbxl` - Roblox Place Files (Binary format)

## How to Add Games
1. Place your .rbxlx or .rbxl files in this directory
2. The bot will automatically detect them when you use the `/generate` command
3. Files will appear in the dropdown menu with formatted names

## File Naming
- File names will be automatically formatted for display
- Underscores and hyphens will be replaced with spaces
- Each word will be capitalized
- Example: `cool_game_map.rbxlx` becomes "Cool Game Map"

## File Information
The bot will display the following information for each file:
- Display name (formatted file name)
- File size
- Last modified date
- File type (RBXLX or RBXL)

## Notes
- Files are sorted by creation date (newest first)
- Maximum of 25 files can be displayed in a single dropdown menu
- Make sure your files are valid Roblox game files
- The bot creates this directory automatically if it doesn't exist

## Example Files Structure
