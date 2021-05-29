module.exports = {
    name: 'clear',
    description: 'clear messages!',
    async execute(message, args) {
        if(!args[0]) return message.reply("Please enter the amount of message to clear")
        if(isNaN(args[0])) return message.reply("Please Enter a Valid Number!");

        if(args[0] > 100) return message.reply("You cannot clear more than 100 messages")
        if(args[0] < 1) return message.reply("You must delete atleast 1 message")

       await message.channel.messages.fetch({limit: args [0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}