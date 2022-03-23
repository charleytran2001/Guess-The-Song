// User control variables
let randomStartTime = false;
let playbackFull = true;

// Assigns variable values depending on user selection
function checkControls() {
    if(document.getElementById("randomStart").value == "false") {
        randomStartTime = false;
    } else {
        randomStartTime = true;
    }

    if(document.getElementById("mediaLength").value == "full") {
        playbackFull = true;
    } else {
        playbackFull = false;
        playbackLength = parseInt(document.getElementById("mediaLength").value);
    }

    // Checks for various timings of media
    retrieveMediaTime();
}

// Function to reset current time in video/song
function replay() {
    if(media.play) {
        // Stops media
        media.pause();
    }
    // Resets video time
    media.currentTime = startTime;
    // Resets variable time
    currentTime = startTime;
}

// Function to pause/play video/song
function playPause() {
    if(media.paused) {
        // Starts media
        media.play();
    } else {
        // Stops media
        media.pause();
    }
}