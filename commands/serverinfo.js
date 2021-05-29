module.exports = {
	name: 'serverinfo',
	description: 'sends the serverinfo of the user!',
	execute(message, args) {
		message.channel.send(`This server's name is: ${message.guild.name}`);
	},
};