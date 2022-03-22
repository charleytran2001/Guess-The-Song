// Variable to store current video/song
let media = document.getElementById("video");

// Starting commands
function initialize() {

    // Checks for start time
    retrieveStartTime();

    // Constantly updates media current time
    media.addEventListener('timeupdate', function() {
        mediaCurrentTime = this.currentTime;

        // Pauses and resets media if current time matches end time
        if(Math.round(mediaCurrentTime) === Math.round(endTime)) {
            playPause();
            replay();
        }
    });

}

// Starts Program
initialize();