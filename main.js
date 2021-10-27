Xnose = 0;
Ynose = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/mZPh6hDm/Clown-Image.jpg');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized Actively');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        Xnose = results[0].pose.nose.x
        Ynose = results[0].pose.nose.y
        console.log("nose x = " + Xnose);
        console.log("nose y = " + Ynose);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(Xnose, Ynose, 20);
    image(clown_nose, Xnose, Ynose, 30, 30);
}

function take_snapshot() {
    save('MyRedNoseFilteredPhoto.png');
}

