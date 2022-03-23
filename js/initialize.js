// Variable to store current video/song
let media = document.getElementById("video");

// Starting commands
function initialize() {

    // Loads media
    media.load();

    // Checks for user settings
    checkControls();

    // Checks for various media timings
    retrieveMediaTime();

    // Constantly checks for current time of media
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