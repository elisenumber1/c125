var wristx = 0;
var wristy = 0;
var leftwristx = 0;
var rightwristx = 0;
var difference = 0;

function setup(){
	video = createCapture(VIDEO);
	video.size(550,500);

	Canvas=createCanvas(550,550);
	Canvas.position(560,150);
	posenet = ml5.poseNet(video, modelloaded);
	posenet.on("pose",gotposes);
}

function modelloaded(){
	console.log("Posenet is intialized.");
}

function gotposes(results){
	if(results.length>0){
		console.log(results);
		console.log(results[0].pose.wrist);
		//wristx = results[0].pose.wrist.x;
		//wristy = results[0].pose.wrist.y;
		leftwristx=results[0].pose.leftWrist.x;
		rightwristx=results[0].pose.rightWrist.x;
		difference = floor(leftwristx - rightwristx);
	}
}

function draw(){
	background("#969A97");
	fill("red");
	stroke("red");
	textSize(difference);
	text('Elise',100,100);
	//text(leftwristx, rightwristx, difference);
}