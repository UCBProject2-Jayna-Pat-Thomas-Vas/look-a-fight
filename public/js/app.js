var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djjvwjjdg/upload';
var CLOUDINARY_UPLOAD_PRESET = 'sehejxiu';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('inputGroupFile01');

var userImageUrl = "";
var faceToken = "";
var facesetToken = "f7424dd25795113590c85d57387605d4";
var facePlusReturnToken = "";
var userCelebChosen = "";

const celebrityInfoDictionary = {
	"e714a0332b9fcba30331839c11a82a72": {
		image: "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Tom-Hanks.jpg",
		name: "Tom Hanks",
		strength: 78,
		hitpoints: 100,
		wins: 0,
		special: "Loud yelling" 
	},
	"588b9e5c05803f9316f539683a6470f3": {
		image: "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Katy-Perry.jpg",
		name: "Katy Perry",
		strength: 78,
		hitpoints: 100,
		wins: 0,
		special: "Fireworks" 
	},
	"b41dd94a22a363156953339e3fc0be02": {
		image: "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/justin-timberlake.jpg",
		name: "Justin Timberlake",
		strength: 78,
		hitpoints: 100,
		wins: 0,
		special: "Annoying crying" 
	}
};



fileUpload.addEventListener('change', function(event){
	var file = event.target.files[0];
	var formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

	axios({
		url: CLOUDINARY_URL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: formData
	}).then(function(res){
		console.log(res);
		userImageUrl = res.data.url;
		$("#users-image").css("background-image", "url("+userImageUrl+")");	
		$("#compare-button").on('click', function(){
			checkCelebImages();
		});
	}).catch(function(err){
		console.error(err);
	});
});

 function checkCelebImages(){
	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/search";

    $.ajax({
      url: queryURL,
      method: "POST",
      data: {
      api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
      api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
      image_url: userImageUrl,
      faceset_token: facesetToken
  	}
	}).done(function(res){
		console.log(res);
		facePlusReturnToken = res.results[0].face_token;
		const info = celebrityInfoDictionary[facePlusReturnToken]
		// populate elements
		$("#celeb-image-chosen").css("background-image", "url("+info.image+")");
		$("#celeb-name-choose").append(info.name);
		$("#celeb-strength-choose").append(info.strength);
		$("#celeb-hitpoints-choose").append(info.hitpoints);
		$("#celeb-wins-choose").append(info.wins);
		$("#celeb-special-choose").append(info.special);

		window.localStorage.setItem("state", JSON.stringify(state));		

	}).fail(function(errorThrown){
		console.error(errorThrown);
	}); 	
};

$("#enter-battle").on("click", function(){
	window.location("/battle.html");
})



// Add users uploaded image to the database.

















// FACESET CREATION
//  function sendCelebImage(){
// 	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/faceset/create";

//     $.ajax({
//       url: queryURL,
//       method: "POST",
//       data: {
//       api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
//       api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
//       display_name: "Celebrity_Faces"
//   	}
// 	}).done(function(res){
// 		console.log(res);
// 		// addCelebImage();
// 	}).fail(function(errorThrown){
// 		console.error(errorThrown);
// 	}); 	
// };

// MANUAL FACE TOKEN FOR CELEBS

// function generateCeleb(){

// 	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";

//     $.ajax({
//       url: queryURL,
//       method: "POST",
//       data: {
//       api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
//       api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
//       image_url: "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/DANIEL-CRAIG.jpg"
//   	}
// 	}).done(function(res){
// 		console.log(res);
// 		faceToken = res.faces[0].face_token;
// 		addCelebImage();
// 	}).fail(function(errorThrown){
// 		console.error(errorThrown);
// 	});
//  };

//  function addCelebImage(){
// 	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/faceset/addface";

//     $.ajax({
//       url: queryURL,
//       method: "POST",
//       data: {
//       api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
//       api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
//       faceset_token: facesetToken,
//       face_tokens: faceToken
//   	}
// 	}).done(function(res){
// 		console.log(res);
// 		console.log(res.face_count)
// 	}).fail(function(errorThrown){
// 		console.error(errorThrown);
// 	}); 	
// };

// REMOVE ALL CELEBS FROM FACESET

// function removeCeleb(){

// 	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/faceset/removeface";

//     $.ajax({
//       url: queryURL,
//       method: "POST",
//       data: {
//       api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
//       api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
//       faceset_token: facesetToken,
//       face_tokens: "RemoveAllFaceTokens"
//   	}
// 	}).done(function(res){
// 		console.log(res);
// 	}).fail(function(errorThrown){
// 		console.error(errorThrown);
// 	});
//  };

// function propCelebImage(){
// 	if (facePlusReturnToken === "e714a0332b9fcba30331839c11a82a72"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Tom-Hanks.jpg");
// 		$("#celeb-name-choose").append("Tom Hanks");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Loud yelling");
// 	} else if (facePlusReturnToken === "588b9e5c05803f9316f539683a6470f3"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Katy-Perry.jpg");
// 		$("#celeb-name-choose").append("Katy Perry");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Fireworks");
// 	} else if (facePlusReturnToken === "c34abbd64f6b57334a567550e202b7a1"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/taylor-swift.jpg");
// 		$("#celeb-name-choose").append("Taylor Swift");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Stealing friends");
// 	} else if (facePlusReturnToken === "d255f97ea3d42cf0166a3b25c2b627f2"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Rowan-Atkinson.jpg");
// 		$("#celeb-name-choose").append("Rowan Atkinson");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Death stare");
// 	} else if (facePlusReturnToken === "b41dd94a22a363156953339e3fc0be02"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/justin-timberlake.jpg");
// 		$("#celeb-name-choose").append("Justin Timberlake");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Annoying crying");
// 	} else if (facePlusReturnToken === "04527dbf52e1b8cc5cfc9a05e9e200d1"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Justin-Bieber.jpg");
// 		$("#celeb-name-choose").append("Justin Bieber");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Vaguely chisled bodyslam");
// 	} else if (facePlusReturnToken === "b1d69b7280147a95207a12028e722546"){
// 		$("img#look-alike-image").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/DANIEL-CRAIG.jpg");
// 		$("#celeb-name-choose").append("Daniel Craig");
// 		$("#celeb-strength-choose").append(78);
// 		$("#celeb-hitpoints-choose").append(100);
// 		$("#celeb-wins-choose").append(0);
// 		$("#celeb-special-choose").append("Torture resistance");
// 	} else {
// 		$("img#look-alike-image").prop("src", "https://i.imgflip.com/g7hps.jpg");
// 	}
// };