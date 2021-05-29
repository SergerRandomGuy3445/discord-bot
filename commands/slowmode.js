module.exports = {
	name: 'slowmode',
	description: 'I have no idea what to type in this description',
	execute(message, args) {
	 if (message.member.hasPermission("MANAGE_CHANNELS")) {
      let sentence = message.content.split(" ");
      sentence.shift();
      sentence = sentence.join(" "); 
      if(sentence != null){
      message.channel.setRateLimitPerUser(sentence);
      }
     
      message.reply(`This chat now has a slowmode of ${sentence} seconds!`)
      } else {
      message.reply(":x: | You don't have perms to do that...")
      }
	},
};