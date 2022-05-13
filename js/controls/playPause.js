// Function to pause/play video
function playPause() {
    if (video.paused) {
        // Starts video
        video.play();
    } else {
        // Stops video
        video.pause();
    }
}