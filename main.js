HarryPorter_theme_song = "";
PetPan_song = "";
leftWristX = 0;
leftWristy = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    HarryPorter_theme_song = loadSound("HarryPortter_theme_song.mp3");
    PetPan_song = loadSound("PeterPan_song.mp3");
}

function setup() {
    canvas = createCanvas(600 , 500);
    canvas.position(550 , 250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + " Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + " Right Wrist Y = " + rightWristY);
    }
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}