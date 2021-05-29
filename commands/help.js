const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Help command and helps the user",
  execute(message, bot, args){
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Comamnds')
    .setAuthor('Zee Pet Help Commands')
    .setDescription('These are the help commands. Use Them wisely!')
    .setThumbnail(`${message.author.displayAvatarURL({dynamic : true})}`)
    .addFields(
    { name: '**Youtube**', value: '`#youtube`', inline: true },
    { name: '**UserInfo**', value: '`#userinfo`', inline: false }, 
    { name: '**ServerInfo**', value: '`#serverinfo`', inline: true },
    { name: '**Clear**', value: '`#clear`', inline: true },
    { name: '**Kick**', value: '`#kick`', inline: true },
    { name: '**Ban**', value: '`#ban`', inline: true },
    { name: '**Ping**', value: '`#ping`', inline: true },
    { name: '**Avatar**', value: '`#avatar`', inline: true },
    )
    .setTimestamp()
    .setImage('https://media1.tenor.com/images/3f58e053707cc8f5186fafbf7572cb9c/tenor.gif?itemid=15841206')
    .setFooter(`Requested by ${message.author.username}`);
  message.channel.send(embed);
}




  }