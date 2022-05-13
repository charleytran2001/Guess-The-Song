// Function to reset current time in video
function replay() {
    if(video.play) {
        // Stops video
        video.pause();
    }
    // Resets video time
    video.currentTime = startTime;
    // Resets variable time
    currentTime = startTime;
}