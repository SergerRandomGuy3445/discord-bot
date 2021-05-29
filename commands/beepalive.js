module.exports = {
	name: 'beep',
	description: 'if he is alive yes!',
	execute(message, args) {
		message.reply(`**BEEP** SAYS **BOOP** HAHAHAHHA BEEP Im alive test thanks for using the command ${message.author.username}`);
	},
};