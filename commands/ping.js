const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'send the users ping',
	execute(message, args) {
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.reply(`Your ping is **${ping}**`);
    
	},
};