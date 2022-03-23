function reload() {
    media.removeAttribute('src');

    // Variable to store current video/song
    media = document.getElementById("video");

    // Time Variables
    startTime = 0;
    mediaDuration;
    mediaCurrentTime = startTime;
    playbackLength = 0;
    endTime;

    initialize();
}