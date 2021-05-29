module.exports = {
    name: 'kick',
    description: 'this commands kicks a member!',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User Has Been Kicked");
        }else{
            message.reply('You cant kick that member');

        }
        
    }
}