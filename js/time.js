// Time Variables
let startTime = 0;
let endTime;
let playbackLength = 0;
let mediaCurrentTime = startTime;
let mediaDuration;

function retrieveMediaTime() {
    // Retreives total length of media
    media.addEventListener('durationchange', function() {
        mediaDuration = this.duration;
        
        // If playback is set to full song, it plays until the end
        if(playbackFull) {
            if(randomStartTime) {
                startTime = Math.floor(Math.random() * mediaDuration);
                media.currentTime = startTime;
            } else {
                // Starts media at specified start time
                media.currentTime = startTime;
            }
            endTime = mediaDuration;

        // Otherwise it makes sure that the playback length doesn't go past song length by adjusting the starting time
        } else {
            if(randomStartTime) {
                startTime = Math.floor(Math.random() * (mediaDuration - playbackLength));
                media.currentTime = startTime;
            } else {
                // Starts media at specified start time
                media.currentTime = startTime;
            }
            endTime = startTime + playbackLength;
        }
    });
}