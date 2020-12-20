score = 0;
cross = true;
gameOvered = false;
running = false;
audio = new Audio('sound3.mp3');
audiogo = new Audio('game-over.mp3');
boy = document.querySelector('.boy');
guy = document.querySelector('.guy');
obstacle = document.querySelector('.obstacle');
gameOver = document.querySelector('.gameOver');
scoreCount = document.querySelector('.scoreCount');
guide1 = document.querySelector('.guide-1');

if(gameOvered==false){
    document.onkeydown = function (e) {
        console.log("key code is: ", e.keyCode);
        if (e.keyCode == 38) {
            if(gameOvered==false){
            running = true;
            audio.play();
            guide1.style.display= "none"
            guy.style.display = "none";
            boy.style.display = "block";
        obstacle.classList.add('obstacleCroc');
        boy.classList.add('animateBoy');
        setTimeout(() => {
            boy.classList.remove('animateBoy')
        }, 700);
    }}
        else if (e.keyCode == 39) {
            boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
            boy.style.left = boyX + 350 + "px";
        }
        else if (e.keyCode == 37) {
            boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
            boy.style.left = (boyX - 300) + "px";
        }
        
    }
    setInterval(() => {
        bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));        
        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
        
        offsetX = Math.abs(bx - ox);
        offsetY = Math.abs(by - oy);
        // console.log(offsetX);
        if (offsetX < 145) {
            cross = false;
            running = false;
            gameOvered = true;
            gameOver.style.visibility = 'visible';
            // obstacle.style.display = "";
            guy.style.display = "block";
            boy.style.display = "none";
            obstacle.classList.remove('obstacleCroc');
            audio.pause();
            audiogo.play();
            setTimeout(() => {
                audiogo.pause();
            }, 3000);
        }
        else if (cross&&running) {
                score += 1;
                updateScore(score);
                cross = false;
                setTimeout(() => {
                    cross = true;
                }, 1000);
        
                setTimeout(() => {
                    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
                    newDur = aniDur - 0.3;
                    obstacle.style.animatioDuration = newDur + "s";
                }, 500);
                
            }
            
        }, 10);
        
        function updateScore(score) {
            if(running) {
                scoreCount.innerHTML = "Your Score: " + score;
            }
        }
        
       
        // Reload everything:
        function reload() {
            reload = location.reload();
        }
        
    }
    
    