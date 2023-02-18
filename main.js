nosex=0;
nosey=0;
leftwristx=0
rightwristx=0
difference=0
user_text=""
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(550,160)
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotposes)
}
function modelloaded(){
    console.log("model is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        leftwristx=results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        difference=floor(leftwristx-rightwristx)
        user_text=document.getElementById("text_user").value
    }
}
function draw(){
    background("black")
    fill("white")
    textSize(difference)
    text(user_text,50,100)
}
