
// Getting user's data at sign-up
$("#sign-up-submit").on("click", function(){
	var name = $("#signup-name").val();
	var username = $("#signup-username").val();
	var email = $("#signup-email").val();
	var password = $("#signup-password").val();

});

// Play and pause music 

// var audioElement = document.createElement("audio");
//   audioElement.setAttribute("src", "audio/battle-begins.mp3");

//        $(".play-button").on("click", function() {
//          audioElement.play();
//        });

//        $(".pause-button").on("click", function() {
//          audioElement.pause();
//        });


// Pull in random celebrity to battle with.
var celebrityProfileArr = [
  {
    name: "Katy Perry",
    strength: 78,
    hitpoints: 100,
    special: "Fireworks",
    playing: false,
    quotes: ["Baby your a firework, now it's time to burn!", 
    "I've got the eye of the tiger, now you die!", 
    "I am a champion and you're gunna hear me roar, now you must pay!",
    "I'm capable of anything, of anything and everything, now you will bleed!",
    "Daisy Dukes, bikinis on top, now your life must end!",
    "I will love you unconditionally, now your soul belongs to me!",
    "You think I'm pretty without any make up on? Now I will end you!",
    "Pictures of last night ended up online, I'm screwed, your time is at an end!",
    "T.G.I.F! Now my hands will crush you!",
    "I kissed a girl and I liked it, your clock just ran out!"
     ]
  },
  {
    name: "Tom Hanks",
    strength: 78,
    hitpoints: 100,
    special: "Loud yelling"
    playing: false,
    quotes: ["Houston, we have a problem",
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
    ]
  },
  {
    name: "Taylor Swift",
    strength: 78,
    hitpoints: 100,
    special: "Stealing friends"
    playing: false,
    quotes: ["I hope you remember that today is never too late to be brand-new. Now you die!",
    "Darling, I'm a nightmare dressed like a daydream, your time is at an end!",
    "You'll see me in hindsight tangled up in you all night, your clock just ran out!",
    "Words, how little they mean when you're a little too late, now you will bleed!"
    ]
  },
  {
    name: "Rowan Atkinson",
    strength: 78,
    hitpoints: 100,
    special: "Death stare"
    playing: false,
    quotes: ["oohhh ohhh mmmmmm",
    "ha ha hmmmmmmm!",
    "eeehhhmmmmmm!",
    "Hellooooo!",
    "afffffthhh"
    ]
  },
  {
    name: "Justin Timberlake",
    strength: 78,
    hitpoints: 100,
    special: "Annoying crying"
    playing: false,
    quotes: ["You and me, that's the recipe for a good time, now your soul belongs to me!",
    ""
    ]
  },
  {
    name: "Justin Bieber",
    strength: 78,
    hitpoints: 100,
    special: "Vaguely chiseled bodyslam"
    playing: false
  },
  {
    name: "Daniel Craig",
    strength: 78,
    hitpoints: 100,
    special: "Torture resistance"
    playing: false
  },
];

// Pull user's celebrity data into battle room with random opponent celebrity.

