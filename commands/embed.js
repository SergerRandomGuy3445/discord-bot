const Discord = require('discord.js');

module.exports = {
    name: "youtube",
    description: "Subscribe the member ahhahah",
  execute(message, bot, args){
    let embed = new Discord.MessageEmbed()
 .setTitle('My Youtube channel')
 .setDescription(`Subscribe TO THIS`)
 .setURL(`https://www.youtube.com/c/SergamingPlayz`)
 .setFooter(`Requested by ${message.author.tag}`)
  message.channel.send(embed);
}




  }