function next() {
    counter++;
    currentPath = "./songs/" + videoArr[counter] + ".mp4";
    video.setAttribute('src', currentPath);
    reload();
}

function back() {
    if(counter !== 0) {
        counter--;
        currentPath = "./songs/" + videoArr[counter] + ".mp4";
        video.setAttribute('src', currentPath);
        reload();
    }
}