// Assigns variable values depending on user selection
function checkControls() {
    if(document.getElementById("random-start").value == "false") {
        randomStartTime = false;
    } else {
        randomStartTime = true;
    }

    if(document.getElementById("video-length").value == "full") {
        playbackFull = true;
    } else {
        playbackFull = false;
        playbackLength = parseInt(document.getElementById("video-length").value);
    }
}