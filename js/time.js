// Time Variables
let startTime = 0;
let mediaDuration;
let mediaCurrentTime = startTime;
let playbackLength = 10;
let endTime;

function retrieveMediaTime() {
    // Retreives total length of media
    media.addEventListener('loadedmetadata', function() {
        mediaDuration = this.duration;
        console.log("Length: " + mediaDuration);
        
        // If playback is set to full song, then it plays until the end
        if(playbackFull) {
            if(randomStartTime) {
                startTime = Math.floor(Math.random() * mediaDuration);
                media.currentTime = startTime;
            } else {
                // Starts media at specified start time
                media.currentTime = startTime;
            }
            endTime = mediaDuration;
            // console.log("Full: " + endTime);

        // Otherwise it makes sure that the playback length doesn't go past song length
        } else {
            if(randomStartTime) {
                startTime = Math.floor(Math.random() * (mediaDuration - playbackLength));
                media.currentTime = startTime;
            } else {
                // Starts media at specified start time
                media.currentTime = startTime;
            }
            endTime = startTime + playbackLength;
            // console.log("Partial: " + endTime);
        }
    });
}