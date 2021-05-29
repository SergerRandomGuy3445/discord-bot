module.exports = {
    name: 'ban',
    description: 'this commands bans a member!',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User Has Been Banned");
        }else{
            message.reply('You cant ban that member');

        }
        
    }
}