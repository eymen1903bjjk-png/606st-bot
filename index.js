const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

// BURAYA BİLGİLERİNİZİ YAZIN:
const TOKEN = 'client.login(process.env.TOKEN);';
const VOICE_CHANNEL_ID = '1560335472528597102';

client.once('ready', () => {
    console.log(`${client.user.tag} başarıyla aktif oldu!`);

    const guild = client.guilds.cache.first();
    const channel = guild.channels.cache.get(VOICE_CHANNEL_ID);

    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
            selfDeaf: true,
            selfMute: true
        });
        console.log(`Bot "${channel.name}" ses kanalına katıldı.`);
    } else {
        console.log('Belirtilen ses kanalı bulunamadı!');
    }
});

client.login(TOKEN);
