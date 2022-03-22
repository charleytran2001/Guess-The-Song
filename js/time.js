// Time Variables
let startTime = 0;
let mediaDuration;
let mediaCurrentTime = startTime;
let playbackLength = 10;
let endTime = startTime + playbackLength;

function startTimeFunction() {
    if (randomStartTime) {
        // Retreives total length of media
        media.addEventListener('loadedmetadata', function () {
            mediaDuration = media.duration;
            startTime = Math.floor(Math.random() * mediaDuration);
            media.currentTime = startTime;
        });

    } else {
        // Starts media at specified start time
        media.currentTime = startTime;
    }
}