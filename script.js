score = 0;
cross = true;
running = true;

audio = new Audio('sound3.mp3');
audiogo = new Audio('game-over.mp3');

setTimeout(() => {
    audio.play();
}, 500);

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    
    if (e.keyCode == 38) {
        boy = document.querySelector('.boy');
        boy.classList.add('animateBoy');
        setTimeout(() => {
            boy.classList.remove('animateBoy')
        }, 700);
    }
    else if (e.keyCode == 39) {
        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyX + 400 + "px";
    }
    else if (e.keyCode == 37) {
        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyX - 300) + "px";
    }
}

setInterval(() => {
    boy = document.querySelector('.boy');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    scoreCount = document.querySelector('.scoreCount');
    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));


    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - ox);
    offsetY = Math.abs(by - oy);
    if (offsetX < 120) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleCroc');
        cross = false;
        running = false;
        boy.style.display = "none";
        guy = document.querySelector('.guy');
        guy.style.display = "block";
        audio.pause();
        audiogo.play();
        
    }
    else if (cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animatioDuration = newDur + "s";
        }, 500);
        
    }
    
}, 10);

function updateScore(score) {
    if(running) {
        scoreCount.innerHTML = "Your Score: " + score;
    }
}


// if (player != null) {
//     document.getElementById("name").innerHTML =
//     "Welcome " + player;
//   }
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
