let counter = 1;
let currentPath;

function next() {
    counter++;
    currentPath = "../media/videos/test" + counter + ".mp4";
    media.setAttribute('src', currentSrc);
}

function back() {
    counter--;
    currentPath = "../media/videos/test" + counter + ".mp4";
    media.setAttribute('src', currentSrc);
}