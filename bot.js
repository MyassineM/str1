const Discord = require("discord.js");
const client = new Discord.Client();
var prefix ="!";
var adminprefix = '!'
const developers = ["436918120184021012"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setp')) {
    client.user.setGame(argresult);
      message.channel.send(`**Bot Playing By  !                     | دِمَــــــــآء   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Bot Watching By **Bot Listening By !                     | دِمَــــــــآء  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Bot Listening By !                     |دِمَــــــــآء   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Bloods");
      message.channel.send(`**Bot Streaming By !                     | دِمَــــــــآء`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Bot Change Name By !                     | دِمَــــــــآء : ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Bot Change Avatar By !                     | دِمَــــــــآء  : :**${argresult}** `);
}
});

client.on("message", async message => {	
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
				 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
	    	if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "● Supporter"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' '); 
   let ticketnumber = 0000;
	if(!subject[0]){
            ticketnumber++;
			     const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor("22BF41");		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
		ticketx.setParent("579052051573506068");
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
	
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , `No subject has been given`)
     .setColor("22BF41")
     .setFooter(`Fendi's Tickety || By Sw3rD#6149` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	}
	
 if(subject[0]){
            ticketnumber++;
 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor("22BF41");		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
	       ticketx.setParent("579052051573506068");
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , subject)
     .setColor("22BF41")
     .setFooter(`Fendi's Tickety || By Sw3rD#6149` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	  }  
}


if(message.content.toLowerCase().startsWith(prefix + `close`)) {
       let thisrole = message.guild.roles.find('name', "● Supporter");
				 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
		
	let team = message.member.roles.find("name", srole);
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Supporter\`\` to yourself.")  
     .setColor("22BF41");
	if(!team) return message.channel.send(d11x1xx);
		 const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor("22BF41");
	if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
	 const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor("22BF41");

    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        }) 
       .catch(() => {
	      const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor("22BF41");
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
  
});


client.on('message', message => {
if(!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);if (command == "bc") {if(!message.member.roles.find('name','bc')) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**⛔ you must have \`ADMINISTRATOR\` premission**, or role called "bc"`)}
let args = message.content.split(" ").slice(1).join(" ");
if(!args) return message.channel.send(`**:rolling_eyes: please type the broadcast message**`)
let filter = m => m.author.id == message.author.id
let idx = 0, fails = 0;let broadcastt = new Discord.RichEmbed().setColor('#36393e')
.addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[3] broadcast for a specific role\n\n[4] broadcast with photo\n\n[0] to cansel**`,`** **`)
.setDescription(`**Please type the number of your chose**`)
.setFooter('you can add to the message [user] = mention the user')
message.channel.send(broadcastt).then(msg => {
message.channel.awaitMessages(filter, {max: 1,time: 90000,errors: ['time']})
.then(collected => {if(collected.first().content === '1') {msg.delete(),message.channel.send(`**☑ Broadcast begin send....**`).then(m => {
message.guild.members.map(member => {setTimeout(() => {member.send(args.replace('[user]',member).replace('[icon]',`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)).then(() => {}).catch((err) => {});},);});})}
if(collected.first().content === '2') {msg.delete(),message.channel.bulkDelete(1),message.channel.send(`**☑ Broadcast begin send....**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {m.send(args.replace('[user]', m))})
message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {m.send(args.replace('[user]', m)) })
return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {m.send(args.replace('[user]', m)) })}
if(collected.first().content === '0') {msg.delete(),message.channel.bulkDelete(1);return message.channel.send(`**Broadcast Has Been Canseled**`);}
if(collected.first().content === '3') {msg.delete();message.channel.bulkDelete(1);
message.channel.send('**Please Type the role name or id.**');
message.channel.awaitMessages(filter, {max: 1,time: 40000,errors: ['time']}).then(t => {
let R = t.first().content;
let role = message.guild.roles.find('name',R) || message.guild.roles.get(R);
if(!role) return message.channel.send('**😕 I Can\'t find this role please try again**'),msg.delete();
message.channel.bulkDelete(2);
if(role.members.size < 1) return message.channel.send('**there is no one have this role **😕');;
let XYZ = new Discord.RichEmbed().setTitle('**:ballot_box_with_check: Broadcast begin send....**').setDescription(`**For the role: ${role}**`).setColor(role.color)
message.channel.send(XYZ)
message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {setTimeout(() => {n.send(args.replace('[user]',n)).catch((err) => {});});});}).catch(err =>{});}
if(!collected.first().content.includes(['1','2','3','4','0'])) {msg.edit('Canceled.')}
if(collected.first().content === '4') { msg.delete();
message.channel.send('**✅ Please Type the photo link now**,Type "cansel" to cansel.').then(msgg =>{
message.channel.awaitMessages(filter, {max: 1,time: 50000,errors: ['time']}).then(XX => {
let photo = XX.first().content; if(photo == 'cansel') {message.channel.bulkDelete(2); return message.channel.send('**Broadcast Has Been Canseled**')}
let embed = new Discord.RichEmbed().setImage(photo).setTitle(`**are you sure you want to send this? \`[y,n]\`**`).setColor('#36393e')
message.channel.send(embed).catch(e =>{return message.channel.send('**The Photo link is wrong :x:**')});
let filter = m => m.author.id == message.author.id
message.channel.awaitMessages(filter, {max: 1,time: 90000,errors: ['time']}).then(XD => {if(XD.first().content === 'y') {
let bc = new Discord.RichEmbed().setTitle(`${args}`).setImage(photo).setFooter(message.guild.name,`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=1024`)
message.channel.bulkDelete(2);msgg.delete();message.channel.send('**☑ Broadcast begin send....**');message.guild.members.map(member => {setTimeout(() => {member.send(bc)}
)})}if(XD.first().content == 'n') {message.channel.bulkDelete(2);message.channel.send('**Broadcast Has Been Canseled**')}
})}).catch(myst =>{msgg.edit('Timed out.');})})
}if(collected.first().content === '5'){} // لو تبي تضيف شي خامس :]
}).catch(mys =>{msg.edit('Timed out to chose.')})})}});

client.on('message', function(message) {//Narox
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;//Narox
        var Narox = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()//Narox
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)//Narox
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("673788413043802174").send({embed:Narox});//Narox
      }
});

client.on('message', message=>{
    if (message.content ===  "99383197"){
    message.guild.leave();
            }
}); //Toxic Codes

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"tops")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
