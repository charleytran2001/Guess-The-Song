let counter = 1;
let currentSrc;

function next() {
    counter++;
    currentSrc = "../media/videos/test" + counter + ".mp4";
    media.setAttribute('src', currentSrc);
}

function back() {
    counter--;
    currentSrc = "../media/videos/test" + counter + ".mp4";
    media.setAttribute('src', currentSrc);
}

