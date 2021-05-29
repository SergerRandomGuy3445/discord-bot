let Discord = require("discord.js")

module.exports = {
	name: 'socials',
	description: 'My Socials!',
	execute(message, args) {
	let embed = new Discord.MessageEmbed()
      .setColor("YELLOW")
      .setTitle("My Socials")
      .setDescription("Check This Out Please :(")
      .setAuthor("Serger")
      .setThumbnail("https://ih1.redbubble.net/image.648333243.3470/st,small,507x507-pad,600x600,f8f8f8.u3.jpg")
      .addField(
        '**My Youtube Channel**',
        'Sergamingplayz',
        true)
        .addField(
            '**My Discord**',
            'SERGAMINGPLAYZ#1354',
            true)
    .setImage("https://i.pinimg.com/originals/5d/ee/91/5dee91700de2b898f61260bea7322a5c.gif")
    .setTimestamp()
    .setFooter("You should check this out man >:(")
    message.channel.send(embed);
	},
};

