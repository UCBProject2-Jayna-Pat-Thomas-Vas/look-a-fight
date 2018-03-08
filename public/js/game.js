katyPerryQuotesArray = ["Baby your a firework, now it's time to burn!", 
    "I've got the eye of the tiger, now you die!", 
    "I am a champion and you're gunna hear me roar, now you must pay!",
    "I'm capable of anything, of anything and everything, now you will bleed!",
    "Daisy Dukes, bikinis on top, now your life must end!",
    "I will love you unconditionally, now your soul belongs to me!",
    "You think I'm pretty without any make up on? Now I will end you!",
    "Pictures of last night ended up online, I'm screwed, your time is at an end!",
    "T.G.I.F! Now my hands will crush you!",
    "I kissed a girl and I liked it, your clock just ran out!"
    ];
tomHanksQuotesArray = ["Houston, we have a problem",
    "Reach for the sky!",
    "You never know what you're gonna get.",
    "Your brothers were killed in combat.",
    "Is that what I'm supposed to tell your mother when she gets another folded American flag",
    "When was the last time you felt good about anything?",
    "We all have orders, and we have to follow 'em. That supersedes everything, including your mothers",
    "You really ARE Stinky Pete, aren't you?",
    "You're outta your box!",
    "Excuse me, ma'am, but I believe you're on the wrong flight.",
    "Stupid is as stupid does.",
    "I'm pretty tired... I think I'll go home now.",
    "Why don't you love me, Jenny?",
    "I'm not a smart man... but I know what love is."
    ];
taylorSwiftQuotesArray = ["I hope you remember that today is never too late to be brand-new. Now you die!",
    "Darling, I'm a nightmare dressed like a daydream, your time is at an end!",
    "You'll see me in hindsight tangled up in you all night, your clock just ran out!",
    "Words, how little they mean when you're a little too late, now you will bleed!"
    ];
rowanAtkinsonQuotesArray = ["oohhh ohhh mmmmmm",
    "ha ha hmmmmmmm!",
    "eeehhhmmmmmm!",
    "Hellooooo!",
    "afffffthhh"
    ];
justinTimberlakeQuotesArray = ["You and me, that's the recipe for a good time, now your soul belongs to me!",
    "Dizzy, spinning, sweating, you can't catch your breath, your time is at an end!",
    "If you let go, the music should groove your bones, now your bones will become dust!"
    ];
justinBieberQuotesArray = ["Babe, you are the reason to breathe, now your breath has run out!",
    "It's funny how you used that time to have me replaced, now I will destroy you!",
    "Can't make up your mind, please don't waste my time, now you die!",
    "You give me purpose, now you will bleed!"
    ]



// Getting user's data at sign-up
$("#sign-up-submit").on("click", function(){
	var name = $("#signup-name").val();
	var username = $("#signup-username").val();
	var email = $("#signup-email").val();
	var password = $("#signup-password").val();

});

// Play and pause music 

var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "audio/battle-begins.mp3");

       $(".play-button").on("click", function() {
         audioElement.play();
       });

       $(".pause-button").on("click", function() {
         audioElement.pause();
       });

function Celebrity(name, image, strength, hitpoints, special, playing){
  this.name = name;
  this.image = image;
  this.strength = strength;
  this.hitpoints = hitpoints;
  this.special = special;
  this.playing = playing;
  this.quotes = 


// [Math.floor(Math.random() * Array.length)];;


this.showStats = function(){
  console.log(this.name);
  console.log(this.strength);
  console.log(this.special);
  console.log(this.quotes);
};

};

var katyPerry = new Celebrity("Katy Perry", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Katy-Perry.jpg", 78, 100, "Fireworks", false, 0);
var tomHanks = new Celebrity("Tom Hanks", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Tom-Hanks.jpg", 78, 100, "Loud yelling", false, 0);
var taylorSwift = new Celebrity("Taylor Swift", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/taylor-swift.jpg", 78, 100, "Stealing friends", false, 0);
var rowanAtkinson = new Celebrity("Rowan Atkinson", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Rowan-Atkinson.jpg", 78, 100, "Death stare", false, 0);
var justinTimberlake = new Celebrity("Justin Timberlake", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/justin-timberlake.jpg", 78, 100, "Annoying crying", false, 0);
var justinBieber = new Celebrity("Justin Bieber", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Justin-Bieber.jpg", 78, 100, "Vaguely chiseled bodyslam", false, 0);
var danielCraig = new Celebrity("Daniel Craig", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/DANIEL-CRAIG.jpg", 78, 100, "Torture resistance", false, 0);


// Pull user's celebrity data into battle room with random opponent celebrity.

