function next() {
    counter++;
    currentPath = "../media/videos/test" + counter + ".mp4";
    video.setAttribute('src', currentPath);
    reload();
}

function back() {
    counter--;
    currentPath = "../media/videos/test" + counter + ".mp4";
    video.setAttribute('src', currentPath);
    reload();
}