let video = document.getElementsByClassName("video")[0];

function play(){
    video.play();
}
function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;

}

function inc(){
    video.playbackSpeed += 0.10;
}

function dec(){

    video.playbackSpeed -= 0.10;
    
}

function back(){
    video.currentTime -= 10;
}

function forward(){
    video.currentTime += 10;
}




