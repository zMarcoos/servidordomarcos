const { client } = require("../index");

client.on('ready', async () => {
    console.log(`${client.user.username} foi iniciado com sucesso. Transmitindo para ${client.users.size} pessoas, ${client.channels.size} canais e ${client.guilds.size} servidores.`);
    let servidor = client.guilds.get("723670278391201863");
    setInterval(() => {
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString();
            const min = Math.floor((ms / (1000 * 60)) % 60).toString();
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
            return `${days.padStart(1, '0')} d, ${hrs.padStart(2, '0')} h, ${min.padStart(2, '0')} min, ${sec.padStart(2, '0')} s.`
        }
        let status = [
            { name: `Minecraft com o Marcos!`, type: 'PLAYING' },
            { name: `criado por zMarcoos#7469!`, type: 'LISTENING' },
            { name: `para ${servidor.members.size} membros!`, type: 'STREAMING', url: 'https://twitch.tv/MarcosGRGames' },
            { name: `há ${duration(client.uptime)}`, type: 'PLAYING' }
        ]
        function setStatus() {
            let randomStatus = status[Math.floor(Math.random() * status.length)]
            client.user.setPresence({ game: randomStatus })
        }
        setStatus();
        setStatus()
    }, 3000)
});

client.login(process.env.TOKEN);
