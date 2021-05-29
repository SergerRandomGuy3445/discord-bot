const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello btw dont forget to try to use vsc instead of repl.it")
})

app.listen(3000, () => {
 console.log("A really sus bot")
})



const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const https = require('https');
const fs = require('fs');

const client = new Discord.Client();
const disbut = require('discord-buttons')(client);

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.commands = new Discord.Collection();
client.on('ready', () => 
{
 client.user.setPresence({ activity: { name: `${prefix}HELP | i dont simp`, type: 'WATCHING' }, status: "idle"})
});

const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}
client.once('ready', () => {
	console.log('Its Not ready man :sob:');
});

client.on('message', message => {
	console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}


});



client.login(process.env.TOKEN_BOT);