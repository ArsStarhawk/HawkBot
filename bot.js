console.log('Beep Beep');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzc1OTMzMzQ4NTIyMDk4Njk4.X6tiPg.8oXSQyBP_ju_wBSYOrSZyyTiIfw');

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('Connected to client')
}

const replies = [
    
    'As I see it, yes.'
    ,'Ask again later.'
    ,'Better not tell you now.'
    ,'Cannot predict now.'
    ,'Concentrate and ask again.'
    ,'Don’t count on it.'
    ,'It is certain.'
    ,'It is decidedly so.'
    ,'Most likely.'
    ,'My reply is no.'
    ,'My sources say no.'
    ,'Outlook not so good.'
    ,'Outlook good.'
    ,'Reply hazy, try again.'
    ,'Signs point to yes.'
    ,'Very doubtful.'
    ,'Without a doubt.'
    ,'Yes.'
    ,'Yes – definitely.'
    ,'You may rely on it.'
]

client.on('message', gotMessage);

function gotMessage(msg){
    console.log(msg.content);
    if(msg.channel.id == '775945243680964608' && msg.content.substr(msg.content.length -1) === '?'){
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
}