var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djjvwjjdg/upload';
var CLOUDINARY_UPLOAD_PRESET = 'sehejxiu';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

var userImageData = "";
var faceToken = "";
var facesetToken = "f7424dd25795113590c85d57387605d4";

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
		userImageData = res.data.url;
		queryArray();
	}).catch(function(err){
		console.error(err);
	});
});

function queryArray(){

$("img#image-container").prop("src", userImageData);

	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";

    $.ajax({
      url: queryURL,
      method: "POST",
      data: {
      api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
      api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
      image_url: userImageData
  	}
	}).done(function(res){
		console.log(res);
		faceToken = res.faces[0].face_token;
		addCelebImage();
	}).fail(function(errorThrown){
		console.error(errorThrown);
	});
 };

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

 function addCelebImage(){
	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/faceset/addface";

    $.ajax({
      url: queryURL,
      method: "POST",
      data: {
      api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
      api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
      faceset_token: facesetToken,
      face_tokens: faceToken
  	}
	}).done(function(res){
		console.log(res);
		console.log(res.data.face_added)
	}).fail(function(errorThrown){
		console.error(errorThrown);
	}); 	
};









// Manual FaceToken Generator

function generateCeleb(){

	var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";

    $.ajax({
      url: queryURL,
      method: "POST",
      data: {
      api_key: "tqTIR8SdydbXwi1jXA2Y_Hr84KLWVSqk",
      api_secret: "9dTFmiQM6AbVFi6LoD-kdLnDXPMfcUnB",
      image_url: "http://res.cloudinary.com/dxxdhfkqw/image/upload/v1519795838/Tom-Hanks.jpg"
  	}
	}).done(function(res){
		console.log(res);
		faceToken = res.faces[0].face_token;
		addCelebImage();
	}).fail(function(errorThrown){
		console.error(errorThrown);
	});
 };