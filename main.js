HarryPorter_theme_song = "";
PetPan_song = "";

function preload() {
    HarryPorter_theme_song = loadSound("HarryPortter_theme_song.mp3");
    PetPan_song = loadSound("PeterPan_song.mp3");
}

function setup() {
    canvas = createCanvas(600 , 500);
    canvas.position(550 , 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video , 0 , 0 , 600 , 500);
}