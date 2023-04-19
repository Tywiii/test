const { DisTube } = require('distube')
const Discord = require('discord.js')
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildVoiceStates,
    Discord.GatewayIntentBits.MessageContent
  ]
})

client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: false,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [
      new SpotifyPlugin({
        emitEventsAfterFetching: true
      }),
      new SoundCloudPlugin(),
      new YtDlpPlugin()
    ]
  })

client.on("ready", async (client) =>{
    console.log("connecté")
});

function replay(){
  // traitement
  client.distube.play(client.channels.cache.get("1097866181463003176"), "https://www.youtube.com/watch?v=8w5ELqXNlvk&t%22")
  setTimeout(replay,39600000); /* rappel après 2 secondes = 2000 millisecondes */
  }

  client.distube.on('error', (e) => {
   console.error(e)
  })
  replay();

client.login("MTA5NzU2OTUxMDcyNDIxOTAxMQ.GMgbxS.Xk0ClNVJrDaZkTRGsy6dE6k2RTGGI7MfrTV-sk")