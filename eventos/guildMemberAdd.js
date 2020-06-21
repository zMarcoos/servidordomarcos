const { client } = require("../index");
const jimp = require("jimp");

client.on('guildMemberAdd', async member => {
  let canal = client.channels.get("723703401090777158");
  let fonte = await jimp.loadFont(jimp.FONT_SANS_32_WHITE)
  let mask = await jimp.read('./mascara.png')
  let fundo = await jimp.read('./projeto.png')
  
  jimp.read(member.user.displayAvatarURL).then(avatar => {
  avatar.resize(102, 102)
  mask.resize(102, 102)
  avatar.mask(mask)

  fundo.print(fonte, 120, 100, member.user.username)
  fundo.composite(avatar, 24, 12).write('bemvindo.png')
  canal.send(``, { files: ["bemvindo.png"] })
  });
});
