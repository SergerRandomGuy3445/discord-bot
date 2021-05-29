const Discord = require('discord.js');

module.exports = {
	name: 'pp',
	description: '[reno]]!',
	execute(message, args) {
  let pp = [
    '',
    '=',
    '==',
    '===',
    '====',
    '=====',
    '======',
    '=======',
    '==========',
    '=================',
   '=========================',
   '======',
   '=================+',
   '=============================== :sunglasses:'
    ];
    message.reply(
    `Your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}D`
    );

	},
};