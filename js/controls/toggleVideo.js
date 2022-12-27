let toggleVideoNum = 0;

let toggleVideo = () => {
    if(toggleVideoNum === 0) {
        document.querySelector("#video").style.display = "block";
        document.querySelector("#place-holder").style.display = "none";
        toggleVideoNum = 1;
    } else {
        document.querySelector("#video").style.display = "none";
        document.querySelector("#place-holder").style.display = "block";
        toggleVideoNum = 0;
    }
    
}