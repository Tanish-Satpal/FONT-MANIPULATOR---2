function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);

    Canvas=createCanvas(550,500);
    Canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Posenet is intializedd !!!');
}

function draw(){
 background('#969A97');       
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}