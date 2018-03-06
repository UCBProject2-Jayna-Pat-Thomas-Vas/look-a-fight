// Play and pause music 

var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "audio/battle-begins.mp3");

       $(".play-button").on("click", function() {
         audioElement.play();
       });

       $(".pause-button").on("click", function() {
         audioElement.pause();
       });



// Pull in random celebrity to battle with.

// Pull user's celebrity data into battle room with random opponent celebrity.

