var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djjvwjjdg/upload';
var CLOUDINARY_UPLOAD_PRESET = 'sehejxiu';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

var userImageUrl = "";
var faceToken = "";
var facesetToken = "f7424dd25795113590c85d57387605d4";
var facePlusReturnToken = "";

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
		$("img#image-container").prop("src", userImageUrl);		
		checkCelebImages();
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
		if (res.faces.length === 0){
			$("img#image-container2").prop("src", "https://i.imgflip.com/g7hps.jpg");
		} else {
		facePlusReturnToken = res.results[0].face_token;
		propCelebImage();
		}
	}).fail(function(errorThrown){
		console.error(errorThrown);
	}); 	
};

function propCelebImage(){
	if (facePlusReturnToken === "e714a0332b9fcba30331839c11a82a72"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Tom-Hanks.jpg");
	} else if (facePlusReturnToken === "588b9e5c05803f9316f539683a6470f3"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Katy-Perry.jpg");
	} else if (facePlusReturnToken === "c34abbd64f6b57334a567550e202b7a1"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/taylor-swift.jpg");
	} else if (facePlusReturnToken === "d255f97ea3d42cf0166a3b25c2b627f2"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Rowan-Atkinson.jpg");
	} else if (facePlusReturnToken === "b41dd94a22a363156953339e3fc0be02"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/justin-timberlake.jpg");
	} else if (facePlusReturnToken === "04527dbf52e1b8cc5cfc9a05e9e200d1"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Justin-Bieber.jpg");
	} else if (facePlusReturnToken === "b1d69b7280147a95207a12028e722546"){
		$("img#image-container2").prop("src", "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/DANIEL-CRAIG.jpg");
	} else {
		$("img#image-container2").prop("src", "https://i.imgflip.com/g7hps.jpg");
	}
}




















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

