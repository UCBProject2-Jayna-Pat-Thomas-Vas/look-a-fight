var colours = ['#f5d76e','#f7ca18','#f4d03f','#ececec','#ecf0f1','#a2ded0'];
var stars = [];

var initialise = function(){
	var canvas = document.getElementById('starfield'),
      context = canvas.getContext('2d');
	
	canvas.width = window.innerWidth, canvas.height = window.innerHeight;
	
	for(var i = 0, l = 100; i < l; i++){
		var radius = Math.random() * 1.5;
		stars.push({ 
			'radius': radius,
			'x': Math.random() * canvas.width,
			'y': Math.random() * canvas.height,
			'colour': colours[parseInt(Math.random()*4)],
			'blur': Math.random() * 10,
			'pulse': true,
			'threshold': (radius * 1.25) 
		});
	}
	window.requestAnimationFrame(draw);
};

var generatePulseVariance = function(star, canvas){
    if(star.pulse){
			star.radius += 0.075;			
			star.pulse = (star.radius <= star.threshold);
		}
		else {
			if(star.radius >= 1)
				star.radius -= 0.075;			
			star.pulse = (star.radius <= 1);
		}
	
	if(star.x < canvas.width)
				star.x += 0.35;
			else
				star.x = 0;
	
	return star;
};

var draw = function() {
	var canvas = document.getElementById('starfield'),
      context = canvas.getContext('2d');
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for(var i = 0, l = stars.length; i < l; i ++){
		var star = stars[i];
		star = generatePulseVariance(star, canvas);
		
		context.beginPath();
		context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI, false);
    context.fillStyle = star.colour;
		context.shadowColor = star.colour;
    context.shadowBlur = star.blur;
    context.fill();
	}
	
	window.requestAnimationFrame(draw);
};

initialise()