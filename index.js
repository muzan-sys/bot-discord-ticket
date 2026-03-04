// index.js

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Command handler
client.on('messageCreate', message => {
    if (message.content.startsWith('!')) {
        const command = message.content.slice(1);
        // Handle commands here
        message.channel.send(`You executed the command: ${command}`);
    }
});

// Log in to Discord with your app's token
client.login('YOUR_DISCORD_BOT_TOKEN');

console.log('Bot is ready!');