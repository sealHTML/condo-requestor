require('dotenv').config(); // Load environment variables from .env

const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Create a collection to store commands
client.commands = new Collection();

// Load commands from /commands folder
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
        console.log(`✅ Loaded command: ${command.data.name}`);
    } else {
        console.log(`⚠️ Warning: Command at ${filePath} is missing required "data" or "execute" property.`);
    }
}

// Register slash commands
const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('🔄 Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID || config.clientId),
            { body: commands },
        );

        console.log('✅ Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('❌ Error registering commands:', error);
    }
})();

// Bot ready event
client.once('ready', () => {
    console.log(`🤖 Bot is ready! Logged in as ${client.user.tag}`);
    console.log(`📊 Serving ${client.guilds.cache.size} servers`);

    client.user.setActivity('Managing Roblox Games', { type: 'WATCHING' });
});

// Command interaction handler
client.on('interactionCreate', async interaction => {
    if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`❌ No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error('❌ Error executing command:', error);
            const errorMessage = {
                content: '❌ There was an error while executing this command!',
                ephemeral: true
            };

            if (interaction.replied || interaction.deferred) {
                await interaction.followUp(errorMessage);
            } else {
                await interaction.reply(errorMessage);
            }
        }
    }

    // Select menu handler
    if (interaction.isStringSelectMenu()) {
        const command = client.commands.get('generate');
        if (command && command.handleSelectMenu) {
            try {
                await command.handleSelectMenu(interaction);
            } catch (error) {
                console.error('❌ Error handling select menu:', error);
                const errorMessage = {
                    content: '❌ There was an error while processing your selection!',
                    ephemeral: true
                };

                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(errorMessage);
                } else {
                    await interaction.reply(errorMessage);
                }
            }
        }
    }
});

// Global error handling
client.on('error', error => console.error('❌ Discord client error:', error));
process.on('unhandledRejection', error => console.error('❌ Unhandled promise rejection:', error));
process.on('uncaughtException', error => {
    console.error('❌ Uncaught exception:', error);
    process.exit(1);
});

// Login
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('❌ No Discord token provided! Please set DISCORD_TOKEN in environment variables.');
    process.exit(1);
}

client.login(token);
