function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(530, 530);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log('PoseNet is Initialised');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#191970');
}