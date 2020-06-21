const { client } = require("../index");

client.on('message', async message => {
    const prefix = "!";
    if (message.author.bot) return;
    if (message.channel.type === "DM") return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
        return message.channel.send(`Meu prefixo é \`\`${prefix}\`\`. Digite ${prefix}ajuda para mais informações.`).then(m => {
            setTimeout(function () {
                m.delete();
            }, 5000);
        });
    }
    if(message.channel.id === "723728272239755286") return;
    if ((message.content.toLowerCase().includes("https://") || message.content.toLowerCase().includes("discord.gg") || message.content.toLowerCase().includes(".com"))) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) return;
        message.delete();
        message.reply("não envie links aqui.").then(m => {
          setTimeout(function(){ 
          m.delete(); 
            }, 5000);
        });
    }
    if (message.channel.id == "723670757649154079") {
        var mensagem = message.content;
        if (!(mensagem.startsWith(prefix) || mensagem.startsWith("/") || mensagem.startsWith("-"))) {
            if (message.member.hasPermission("MANAGE_MESSAGES")) return;
            message.delete();
            message.channel.send("Sem conversas paralelas aqui dentro, " + message.author + "!");
        }
    }
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;
    if (!message.content.startsWith(prefix)) return;
    try {
        if (client.commands.has(cmd)) {
            command = client.commands.get(cmd);
        } else {
            command = client.commands.get(client.aliases.get(cmd));
        }
        return command.run(client, message, args);
    } catch (err) {
        console.error("Erro: " + err)
        if (err === err) {
            message.delete();
            message.channel.send(`${message.author}, este comando não existe!`).then(mm => {
                setTimeout(function () {
                    mm.delete();
                }, 5000);
            });
        }
    }
});
