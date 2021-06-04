//Roulette.GG
//By r3sgame

//Check out the r3sgame Discord for more information about this application: https://discord.com/invite/2h4ueYc

//Import libraries to use for this application. Check to make sure you already have these installed, especially discord.js.
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

//Initialize status and log to console when ready
client.on('ready', () => {
  
    console.log(`Logged in as ${client.user.tag}!`);
  
  client.user.setActivity(`| Type ^help for help`, {type: 'PLAYING'});
});

//When a user types a message
client.on('message', msg => {

//Checks if the user typed ^spin or ^Spin. You can change it to require the user to type something else to trigger the code.
  if (msg.content === '^spin' || msg.content === '^Spin') {
   
//Uses a random number generator to decide what to post. Five categories are included in this bot.
    var roulette = Math.random() * 8 + 1;
    if(roulette <= 2) {
        fetchCat(msg);
    }
    else if(roulette <= 3) {
        fetchDog(msg);
    } 
    else if(roulette <= 5) {
        fetchMeme(msg);
    }
    else if(roulette <= 7) {
        fetchAdvice(msg);
    }
    else if(roulette <= 9) {
        fetchTrivia(msg);
    }
  

  }
 
//Triggers the help message if the user typed ^help. You can change it to require the user to type something else. Keep in mind, you should also change the status if you wish to do so.
  if (msg.content === '^help') {

    msg.reply('Thanks for asking! Simply type ^spin to generate a random image or text.');
 
    }
});

//Functions to fetch information to post. These take information from several different APIs.
const fetchMeme = async (message) => {
    const meme =  await axios.get('https://meme-api.herokuapp.com/gimme');
    message.reply(meme.data.url)
    }

const fetchTrivia = async (message) => {
    const trivia =  await axios.get('https://opentdb.com/api.php?amount=1');
    message.reply('Question: ' + trivia.data.results[0].question + ' | Answer: ' + trivia.data.results[0].correct_answer);
    }    

const fetchAdvice = async (message) => {
    const advice =  await axios.get('https://api.adviceslip.com/advice');
    message.reply('"'+ advice.data.slip.advice + '"');
    }
const fetchDog = async (message) => {
        message.reply('https://place.dog/300/200');
        }
const fetchCat = async (message) => {
    const cat =  await axios.get('https://api.thecatapi.com/v1/images/search');
    message.reply(cat.data[0].url);
         }

//Place your token where it says "Your Token." You can find the token in the Bot tab in the Discord Developer Portal. This part is essential for the bot to function properly. DO NOT SHARE YOUR TOKEN!
    client.login('ODQ3NjMyNjE4OTc5NDU5MDg0.YLA5ZA.0c8Ov3I0TZTDE3jFQadNX9C8Wfg');