difference = 0;
rightWristX = 0;
leftWristX = 0; 

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
    if(results.length > 0)
    {
        console.log(results);
        
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background("#24EDED");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#4C0FA8");
    text('Swasti',50,400);
}