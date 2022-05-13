function retrieveVideoTime() {
    // Retreives total length of video
    video.addEventListener('durationchange', function() {
        videoDuration = this.duration;
        
        // If playback is set to full length, it plays until the end
        if(playbackFull) {
            if(randomStartTime) {
                startTime = Math.floor(Math.random() * videoDuration);
                video.currentTime = startTime;
            } else {
                // Starts video at specified start time
                video.currentTime = startTime;
            }
            endTime = videoDuration;

        // Otherwise it makes sure that the playback length doesn't go past video length by adjusting the starting time
        } else {
            if(randomStartTime) {
                startTime = Math.floor(Math.random() * (videoDuration - playbackLength));
                video.currentTime = startTime;
            } else {
                // Starts video at specified start time
                video.currentTime = startTime;
            }
            endTime = startTime + playbackLength;
        }
    });
}