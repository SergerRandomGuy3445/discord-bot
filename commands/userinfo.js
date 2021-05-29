module.exports = {
	name: 'userinfo',
	description: 'sends the info of the user!',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};