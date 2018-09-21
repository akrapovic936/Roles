const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Dating Roles |$roles `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



const developers = ["348555232529219585","487314985362391060"]
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**?   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**?**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



client.on('message', msg => {//msg
    if (msg.content === 'colors') {
      if (msg.channel.id !== "469301174542270464") return;
      msg.channel.send({file : "https://cdn.discordapp.com/attachments/466153403475558400/469301275180400651/colors1.png"})
    }
  });;
  
const Client = require('discord.js');

client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'color'){
if (message.channel.id !== "469301174542270464") return;
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** ❌ `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
              
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed Successfully** ✅ `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});



client.on('message', message => {
if (message.content.startsWith('$roles')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`
•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•
:earth_africa: Countries :earth_africa:
ღ   EP   -------------------> Europe
ღ
ღ   NA   -------------------> North America
ღ
ღ   SA   -------------------> South America
ღ
ღ   MA   -------------------> Morocco
ღ
ღ   AUS  -------------------> Australia
ღ
ღ   AS   -------------------> Asia
ღ
ღ   RUS  -------------------> Russia
ღ
ღ   GER  -------------------> Germany
ღ
ღ   UK   -------------------> United Kingdom
ღ
ღ   CA   -------------------> Canada
ღ
ღ   NZ   -------------------> New Zealand
ღ
ღ   EU   -------------------> Dubai
ღ   
•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•
Click On ▶ To Go Games Side
usage :arrow_heading_down:
$add            To add a role
$remove     To remove a role
   `
,`
•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•
:video_game:  Games :video_game:
 
ღ  R6S    --------> Rainbow Six Siege
ღ
ღ  GTA5
ღ
ღ  CSGO    --------> Counter Strike Global Offensive
ღ
ღ  RUST
ღ
ღ  GMOD    --------> Garrys Mod
ღ
ღ  LOL    --------> League of Legends
ღ
ღ  BF1    --------> Battlefield 1
ღ
ღ  BF3    --------> Battlefield 3
ღ
ღ  BF4    --------> Battlefield 4
ღ
ღ  FORTNITE
ღ
ღ  MC    --------> Minecraft
ღ
ღ  PUBG    --------> Playerunknowns Battlegrounds
ღ  FIFA 18
ღ
ღ  COD    --------> Call of duty
ღ
ღ  COD WW3    --------> Call of duty world war 3
ღ
ღ  COD BO3   --------> Call of duty black ops 3
ღ
ღ  BRAWLHALLA
ღ
ღ  PES 18    --------> Pro Evolution Soccer 2018
ღ
ღ  DOFUS
ღ
ღ  H1Z1
ღ
•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•
Click On ▶ To Go To General Roles
usage :arrow_heading_down:
$add            To add a role
$remove     To remove a role
   `,`
•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•
:gear: General Roles :gear:
 
 
ღ  Coder
ღ
ღ  Gamer
ღ
ღ  Otaku
ღ
ღ  Gamer Girl
ღ
ღ  Female
ღ
ღ  Male
ღ
ღ  Streamer
ღ
ღ  Youtuber
ღ
ღ  Designer
ღ 
ღ  DJ
ღ
ღ  Bisexual
ღ
ღ  Gay
ღ
ღ  Straight
ღ
ღ  Lesbian
ღ
ღ  Transgender
ღ
ღ  Trap
ღ
ღ  Shemale
ღ
•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•—•
usage :arrow_heading_down:
$add            To add a role
$remove     To remove a role
   `]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
	.setThumbnail(message.author.avatarURL)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.setThumbnail(message.author.avatarURL);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.setThumbnail(message.author.avatarURL);
            msg.edit(embed)
        })
        })
    })
    }
});  




client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove Otaku')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Otaku"));
    message.reply('Your role **Otaku** has been Removed');
 }
 }); 
	 
	 
client.on('message', message => {
  if (message.content.startsWith('$add Otaku')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Otaku"));
    message.reply('Your role updated to **Otaku** ');
 }
 }); 





client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove NA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[NA] North America"));
    message.reply('Your role **[NA] North America** has been Removed');
 }
 }); 
	 
	 
client.on('message', message => {
  if (message.content.startsWith('$add NA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[NA] North America"));
    message.reply('Your role updated to **[NA] North America** ');
 }
 }); 


client.on('message', message => {
  if (message.content.startsWith('$add NZ')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[NZ] New Zealand "));
    message.reply('Your role updated to **[NZ] New Zealand** ');
 }
 }); 


client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove NZ')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[NZ] New Zealand"));
    message.reply('Your role **[NZ] New Zealand** has been Removed');
 }
 }); 


client.on('message', message => {
  if (message.content.startsWith('$add EU')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[EU] Dubai"));
    message.reply('Your role updated to **[EU] Dubai** ');
 }
 }); 


client.on('message', message => {  //Dating Roles Bot Created By Larpraz And Night Blade
  if (message.content.startsWith('$remove EU')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[EU] Dubai"));
    message.reply('Your role **[EU] Dubai** has been Removed');
 }
 }); 


 
 client.on('message', message => {
  if (message.content.startsWith('$add SA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[SA] South America"));
    message.reply('Your role updated to  **[SA] South America** ');
 }
 }); 
 
 
 client.on('message', message => {
  if (message.content.startsWith('$remove SA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[SA] South America"));
    message.reply('Your role **[SA] South America** has been Removed');
 }
 }); 
 
 
 
 
 client.on('message', message => {
  if (message.content.startsWith('$add MA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[MA] Morocco"));
    message.reply('Your role updated to  **[MA] Morocco** ');
 }
 });

 
  client.on('message', message => {
  if (message.content.startsWith('$remove MA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[MA] Morocco"));
    message.reply('Your role **[MA] Morocco** has been Removed');
 }
 }); 
 
 
 

 client.on('message', message => {
  if (message.content.startsWith('$add EP')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[EP] Europe"));
    message.reply('Your role updated to  **[EP] Europe** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove EP')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[EP] Europe"));
    message.reply('Your role **[EP] Europe** has been Removed');
 }
 }); 
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$add AUS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[AUS] Australia"));
    message.reply('Your role updated to  **[AUS] Australia** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove AUS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[AUS] Australia"));
    message.reply('Your role **[AUS] Australia** has been Removed');
 }
 }); 
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$add AS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[AS] Asia"));
    message.reply('Your role updated to  **[AS] Asia** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove AS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[AS] Asia"));
    message.reply('Your role **[AS] Asia** has been Removed');
 }
 }); 
 
 
 
   client.on('message', message => {
  if (message.content.startsWith('$add RUS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[RUS] Russia"));
    message.reply('Your role updated to  **[RUS] Russia** ');
 }
 });
 
  client.on('message', message => {
  if (message.content.startsWith('$remove  RUS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[RUS] Russia"));
    message.reply('Your role **[RUS] Russia** has been Removed');
 }
 }); 
 
 
 
   client.on('message', message => {
  if (message.content.startsWith('$add GER')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[GER]Germany"));
    message.reply('Your role updated to  **[GER]Germany** ');
 }
 });
 
 
  client.on('message', message => {
  if (message.content.startsWith('$remove GER')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[GER] Germany"));
    message.reply('Your role **[GER] Germany** has been Removed');
 }
 }); 
 
    client.on('message', message => {
  if (message.content.startsWith('$add UK')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[UK] United Kingdom"));
    message.reply('Your role updated to  **[UK] United Kingdom** ');
 }
 });
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$remove UK')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[UK] United Kingdom"));
    message.reply('Your role **[UK] United Kingdom** has been Removed');
 }
 }); 



    client.on('message', message => {
  if (message.content.startsWith('$add CA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "[CA] CANADA"));
    message.reply('Your role updated to  **[CA] CANADA** ');
 }
 });
 
 
 
  client.on('message', message => {
  if (message.content.startsWith('$remove CA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "[CA] CANADA"));
    message.reply('Your role **[CA] CANADA** has been Removed');
 }
}); 	

//Games Side

    client.on('message', message => {
  if (message.content.startsWith('$add R6S')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Rainbow Six Siege"));
    message.reply('Your role updated to  **Rainbow Six Siege** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove R6S')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Rainbow Six Siege"));
    message.reply('Your role **Rainbow Six Siege** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add GTA5')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Grand Theft Auto 5"));
    message.reply('Your role updated to  **Grand Theft Auto 5** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove GTA5')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Grand Theft Auto 5"));
    message.reply('Your role **Grand Theft Auto 5** has been Removed');
 }
});

    client.on('message', message => {
  if (message.content.startsWith('$add RUST')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "RUST"));
    message.reply('Your role updated to  **RUST** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove RUST')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "RUST"));
    message.reply('Your role **RUST** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add GMOD')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Garry's Mod"));
    message.reply('Your role updated to  **Garrys Mod** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove GMOD')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Garry's Mod"));
    message.reply('Your role **Garrys Mod** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add CSGO')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Counter Strike Global Offensive"));
    message.reply('Your role updated to  **Counter Strike Global Offensive** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove CSGO')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Counter Strike Global Offensive"));
    message.reply('Your role **Counter Strike Global Offensive** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add BF1')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Battlefield 1"));
    message.reply('Your role updated to  **Battlefield 1** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove BF1')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Battlefield 1"));
    message.reply('Your role **Battlefield 1** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add BF3')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Battlefield 3"));
    message.reply('Your role updated to  **Battlefield 3** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove BF3')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Battlefield 3"));
    message.reply('Your role **Battlefield 3** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add BF4')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Battlefield 4"));
    message.reply('Your role updated to  **Battlefield 4** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove BF4')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Battlefield 4"));
    message.reply('Your role **Battlefield 4** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add FORTNITE')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "FORTNITE"));
    message.reply('Your role updated to  **FORTNITE** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove FORTNITE')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "FORTNITE"));
    message.reply('Your role **FORTNITE** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add MC')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Minecraft"));
    message.reply('Your role updated to  **Minecraft** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove MC')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Minecraft"));
    message.reply('Your role **Minecraft** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add PUBG')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Playerunknowns Battlegrounds"));
    message.reply('Your role updated to  **Playerunknowns Battlegrounds** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove PUBG	')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Playerunknowns Battlegrounds"));
    message.reply('Your role **Playerunknowns Battlegrounds** has been Removed');
 }
});



    client.on('message', message => {
  if (message.content.startsWith('$add FIFA 18')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "FIFA 2018"));
    message.reply('Your role updated to  **FIFA 2018** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove FIFA 18')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "FIFA 2018"));
    message.reply('Your role **FIFA 2018** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add COD')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Call of duty"));
    message.reply('Your role updated to  **Call of duty** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove COD')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Call of duty"));
    message.reply('Your role **Call of duty** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add COD WW3')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Call of Duty World War 3"));
    message.reply('Your role updated to  **Call of Duty World War 3** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove COD WW3')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Call of Duty World War 3"));
    message.reply('Your role **Call of Duty World War 3** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add COD BO3')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Call of duty black ops 3"));
    message.reply('Your role updated to  **Call of duty black ops 3** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove COD BO3')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Call of duty black ops 3"));
    message.reply('Your role **Call of duty black ops 3** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add BRAWLHALLA')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "BRAWLHALLA"));
    message.reply('Your role updated to  **BRAWLHALLLA** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove BRAWLHALLA')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "BRAWLHALLA"));
    message.reply('Your role **BRAWLHALLLA** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add PES 18')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Pro Evolution Soccer 2018"));
    message.reply('Your role updated to  **Pro Evolution Soccer 2018** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove PES 18')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Pro Evolution Soccer 2018"));
    message.reply('Your role **Pro Evolution Soccer 2018** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add DOFUS')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "DOFUS"));
    message.reply('Your role updated to  **DOFUS** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove DOFUS')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "DOFUS"));
    message.reply('Your role **DOFUS** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add H1Z1')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "H1Z1"));
    message.reply('Your role updated to  **H1Z1** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove H1Z1')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "H1Z1"));
    message.reply('Your role **H1Z1** has been Removed');
 }
});

//General Roles

    client.on('message', message => {
  if (message.content.startsWith('$add Coder')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Coder"));
    message.reply('Your role updated to  **Coder** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Coder')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Coder"));
    message.reply('Your role **Coder** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Gamer')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Gamer"));
    message.reply('Your role updated to  **Gamer** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Gamer')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Gamer"));
    message.reply('Your role **Gamer** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Gamer Girl')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Gamer Girl"));
    message.reply('Your role updated to  **Gamer Girl** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Gamer Girl')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Gamer Girl"));
    message.reply('Your role **Gamer Girl** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Female')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Female"));
    message.reply('Your role updated to  **Female** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Female')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Female"));
    message.reply('Your role **Female** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Male')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Male"));
    message.reply('Your role updated to  **Male** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Male')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Male"));
    message.reply('Your role **Male** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Streamer')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Streamer"));
    message.reply('Your role updated to  **Streamer** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Streamer')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Streamer"));
    message.reply('Your role **Streamer** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Youtuber')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Youtuber"));
    message.reply('Your role updated to  **Youtuber** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Youtuber')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Youtuber"));
    message.reply('Your role **Youtuber** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Designer')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Designer"));
    message.reply('Your role updated to  **Designer** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Designer')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Designer"));
    message.reply('Your role **Designer** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add DJ')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "DJ"));
    message.reply('Your role updated to  **DJ** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove DJ')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "DJ"));
    message.reply('Your role **DJ** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Transgender')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Transgender"));
    message.reply('Your role updated to  **Transgender** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Transgender')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Transgender"));
    message.reply('Your role **Transgender** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Shemale')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Shemale"));
    message.reply('Your role updated to  **Shemale** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Shemale')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Shemale"));
    message.reply('Your role **Shemale** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Lesbian')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Lesbian"));
    message.reply('Your role updated to  **Lesbian** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Lesbian')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Lesbian"));
    message.reply('Your role **Lesbian** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Trap')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Trap"));
    message.reply('Your role updated to  **Trap** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Trap')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Trap"));
    message.reply('Your role **Trap** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Bisexual')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Bisexual"));
    message.reply('Your role updated to  **Bisexual** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Bisexual')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Bisexual"));
    message.reply('Your role **Bisexual** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Gay')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Gay"));
    message.reply('Your role updated to  **Gay** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Gay')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Gay"));
    message.reply('Your role **Gay** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add Straight')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Straight"));
    message.reply('Your role updated to  **Straight** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove Straight')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "Straight"));
    message.reply('Your role **Straight** has been Removed');
 }
});


    client.on('message', message => {
  if (message.content.startsWith('$add LOL')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "League Of Legends"));
    message.reply('Your role updated to  **League of Legends** ');
 }
 });
  client.on('message', message => {
  if (message.content.startsWith('$remove LOL')) {
     if(!message.channel.guild) return;
  message.member.removeRole(message.guild.roles.find("name", "League Of Legends"));
    message.reply('Your role **League of Legends** has been Removed');
 }
});



client.on('message', rebel => {
    if (rebel.content === "roles") {
                  if(!rebel.channel.guild) return rebel.reply('** This command only for servers **');
                             if(!rebel.member.hasPermission('ADMINISTRATOR')) return      rebel.channel.send('**You Dont Have permission** `ADMINISTRATOR`' );
                  const embed = new Discord.RichEmbed()
        .setDescription('** Hey [Larpraz] and [ℕїℊℌ⊥ ßʟαⅾℯ] im creating the roles right now !**')
    rebel.channel.sendEmbed(embed);
    
        rebel.guild.createRole({
        name : "Counter Strike Global Offensive",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Grand Theft Auto 5",
        permissions :   [1],
        color : " #ffffff"
    })

        rebel.guild.createRole({
        name : "Rainbow Six Siege",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Garrys Mod",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "RUST",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Battlefield 1",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Battlefield 3",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Battlefield 4",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Minecraft",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Playerunknowns Battlegrounds",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Call of duty",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Call of Duty World War 3",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Call of duty black ops 3",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "BRAWLHALLA",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Pro Evolution Soccer 2018",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "DOFUS",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "H1Z1",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "FIFA 2018",
        permissions :   [1],
        color : " #ffffff"
    })

        rebel.guild.createRole({
        name : "Coder",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Female",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Male",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Streamer",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Youtuber",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Designer",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "DJ",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Bisexual",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Gay",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Straight",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Lesbian",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Transgender",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Trap",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Shemale",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "FORTNITE",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "League Of Legends",
        permissions :   [1],
        color : " #ffffff"
    })
        rebel.guild.createRole({
        name : "Lesbian",
        permissions :   [1],
        color : " #ffffff"
    })
 }
}); 




client.login(process.env.BOT_TOKEN);
