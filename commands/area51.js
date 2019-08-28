const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('we gonna see them aliens!!');

};

module.exports.help = {
  name: "area51"
};