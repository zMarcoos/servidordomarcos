const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
message.channel.send("Ainda não há comandos").then(m => {
setTimeout(function(){ 
    m.delete(); 
}, 3000);
});
}

module.exports.help = {
  name: "ajuda",
  aliases: ['help']
}
