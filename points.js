const { Client, Events, GatewayIntentBits } = require('discord.js');
const { cli } = require('forever');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, c => {
  console.log(`Ready! (${c.user.tag})`);
});

let points = {};
let pts = {};

client.on(Events.MessageCreate, message =>  {
  if (message.channel.name === "メーコブポイント") {
    if (message.author.bot) return;
    let ID = Number(message.author.id)
    if (!pts[ID]) 
          pts[ID] = 0; 
    if(message.content === "!#pt") {
           var userPoints = String(pts[ID]) || 0;
           message.channel.send(message.author.username+"は現在" + userPoints + "pt もっています。");
    }
    if (message.content.match(/[メめ][ーい～][コこ][ブぶ]/)) {
        message.channel.send("メーコブ～～～:bangbang: :bangbang: :bangbang: ");
    if (Math.random() <= (1/3)) {
      let points = Math.floor(Math.random() * 100) + 1;
      if (!pts[ID]) 
          pts[ID] = 0;    
      pts[ID] += points;
      var point = String(points)
      message.channel.send("おめでとう！！"+message.author.username +"は" + point + "ptを手に入れた!!",);
    }else{
       message.channel.send("残念だが、"+message.author.username+"に与えるptはない。",);

    } 
  }
}
}
);



client.login('OTgzNjY1MzYzNjU0OTU5MTE0.G19Bw3.GyQRefbPxRXQ4N4CYXP0lPwYu_mtqmlGHGUZLo');