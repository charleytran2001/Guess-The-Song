let counter = 1;
let currentPath;

function next() {
    counter++;
    currentPath = "../media/videos/test" + counter + ".mp4";
    media.setAttribute('src', currentPath);
    reload();
}

function back() {
    counter--;
    currentPath = "../media/videos/test" + counter + ".mp4";
    media.setAttribute('src', currentPath);
    reload();
}