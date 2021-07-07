/*========== TYPING ANIMATION WITH JAVASCIPT ============*/
/*const str = document.getElementById('show-case-title').getAttribute('data-title');
alert(str);
let i = 0;


// TITLE ANIMATION TYPING
(function typeTitle() {
    if (i < str.length) {
        document.getElementById("show-case-title").innerHTML += str.charAt(i);
        i++;
        setTimeout(typeTitle, 180);
    }
})();*/


/*========== PLAY / PAUSE VIDEO  ============*/
//const btnEl1 = document.getElementById('btnController1');
const btnEl2 = document.getElementById('btnController2');


/*const videoController1 = () => {
    const videoEl = document.getElementById('trailer_video1');
    //const btnEl = document.getElementById('btnController');

    // CHECK IF THE VIDEO PAUSED OR OPPOSITE
    if(videoEl.paused) {
        videoEl.play();
        btnEl1.innerHTML = "<i class='bx bx-pause'></i>";
    } else {
        videoEl.pause();
        btnEl1.innerHTML = "<i class='bx bx-play'></i>";
    }
};*/




const videoController2 = () => {
    const videoEl = document.getElementById('trailer_video2');
    //const btnEl = document.getElementById('btnController');

    // CHECK IF THE VIDEO PAUSED OR OPPOSITE
    if(videoEl.paused) {
        videoEl.play();
        btnEl2.innerHTML = "<i class='bx bx-pause'></i>";
    } else {
        videoEl.pause();
        btnEl2.innerHTML = "<i class='bx bx-play'></i>";
    }
};

//btnEl1.addEventListener('click', videoController1);

btnEl2.addEventListener('click', videoController2);
