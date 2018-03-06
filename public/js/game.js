
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


// Pull in random celebrity to battle with.


// Pull user's celebrity data into battle room with random opponent celebrity.

