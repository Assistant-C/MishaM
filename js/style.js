const buttons = document.querySelectorAll('.button_style_1');

buttons.forEach(button => {
    button.addEventListener('click', function() {
    this.classList.add('button-clicked');

    setTimeout(() => {
    this.classList.remove('button-clicked');
    }, 150);
    });
});

function TuchFox(){
    let clickFox = document.getElementById("clickFox")
    let clickCount = 0;

    clickFox.addEventListener('click', function(){
        clickCount++;

        if(clickCount === 4){
            Swal.fire({
                title: "Эй!",
                text: "Не мешай этому лисёнку спать! >:<",
                imageUrl: "https://i.pinimg.com/736x/6e/4a/a6/6e4aa6c804bbbcc830e38186b085737f.jpg",
                imageWidth: 400,
                imageHeight: 270,
                imageAlt: "Custom image"
            });
        }
    })
}


document.getElementById('startAnimationButton1').addEventListener('click', function() {
    resetProgressBar1();
    animateProgressBar1();
});
function resetProgressBar1() {
    let progressBar1 = document.getElementById('progressBar1');
    progressBar1.style.width = '0%'; // Сброс до начальной ширины
}
function animateProgressBar1() {
    let progressBar1 = document.getElementById('progressBar1');
        let prozent =  document.getElementById("progress1");
        let start = 0;
                const end = 90;
                const duration = 1000; // 2 seconds
                const startTime = Date.now();
                function update() {
                    const elapsedTime = Date.now() - startTime;
                      const progress = Math.min(elapsedTime / duration, 1); // limit progress to 1
                      const currentPercent = Math.floor(progress * end);
                    prozent.textContent = currentPercent + '%';
                    progressBar1.style.width = '90%'; 
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
    
}

document.getElementById('startAnimationButton2').addEventListener('click', function() {
    resetProgressBar2();
    animateProgressBar2();
});
function resetProgressBar2() {
    let progressBar2 = document.getElementById('progressBar2');
    progressBar2.style.width = '0%'; // Сброс до начальной ширины
}
function animateProgressBar2() {
    let progressBar2 = document.getElementById('progressBar2');
    let prozent =  document.getElementById("progress2");
        let start = 0;
                const end = 70;
                const duration = 1000; // 2 seconds
                const startTime = Date.now();
                function update() {
                    const elapsedTime = Date.now() - startTime;
                      const progress = Math.min(elapsedTime / duration, 1); // limit progress to 1
                      const currentPercent = Math.floor(progress * end);
                    prozent.textContent = currentPercent + '%';
                    progressBar2.style.width = '70%'; 
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
}

document.getElementById('startAnimationButton3').addEventListener('click', function() {
    resetProgressBar3();
    animateProgressBar3();
});
function resetProgressBar3() {
    let progressBar3 = document.getElementById('progressBar3');
    progressBar3.style.width = '0%'; // Сброс до начальной ширины
}
function animateProgressBar3() {
    let progressBar3 = document.getElementById('progressBar3');
    let prozent =  document.getElementById("progress3");
        let start = 0;
                const end = 50;
                const duration = 1000; // 2 seconds
                const startTime = Date.now();
                function update() {
                    const elapsedTime = Date.now() - startTime;
                      const progress = Math.min(elapsedTime / duration, 1); // limit progress to 1
                      const currentPercent = Math.floor(progress * end);
                    prozent.textContent = currentPercent + '%';
                    progressBar3.style.width = '60%'; 
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
}
document.getElementById('startAnimationButton4').addEventListener('click', function() {
    resetProgressBar4();
    animateProgressBar4();
});
function resetProgressBar4() {
    let progressBar4 = document.getElementById('progressBar4');
    progressBar4.style.width = '67%'; // Сброс до начальной ширины
}
function animateProgressBar4() {
    let progressBar4 = document.getElementById('progressBar4');
    let prozent =  document.getElementById("progress4");
        let start = 0;
                const end = 80;
                const duration = 1000; // 2 seconds
                const startTime = Date.now();
                function update() {
                    const elapsedTime = Date.now() - startTime;
                      const progress = Math.min(elapsedTime / duration, 1); // limit progress to 1
                      const currentPercent = Math.floor(progress * end);
                    prozent.textContent = currentPercent + '%';
                    progressBar4.style.width = '80%'; 
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
}
document.getElementById('startAnimationButton5').addEventListener('click', function() {
    resetProgressBar5();
    animateProgressBar5();
});
function resetProgressBar5() {
    let progressBar5 = document.getElementById('progressBar5');
    progressBar5.style.width = '0%'; // Сброс до начальной ширины
}
function animateProgressBar5() {
    let progressBar5 = document.getElementById('progressBar5');
    let prozent =  document.getElementById("progress5");
        let start = 0;
                const end = 66;
                const duration = 1000; // 2 seconds
                const startTime = Date.now();
                function update() {
                    const elapsedTime = Date.now() - startTime;
                      const progress = Math.min(elapsedTime / duration, 1); // limit progress to 1
                      const currentPercent = Math.floor(progress * end);
                    prozent.textContent = currentPercent + '%';
                    progressBar5.style.width = '66%'; 
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
}
document.getElementById('startAnimationButton6').addEventListener('click', function() {
    resetProgressBar6();
    animateProgressBar6();
});
function resetProgressBar6() {
    let progressBar6 = document.getElementById('progressBar6');
    progressBar6.style.width = '0%'; // Сброс до начальной ширины
}
function animateProgressBar6() {
    let progressBar6 = document.getElementById('progressBar6');
    let prozent =  document.getElementById("progress6");
        let start = 0;
                const end = 98;
                const duration = 1000; // 2 seconds
                const startTime = Date.now();
                function update() {
                    const elapsedTime = Date.now() - startTime;
                      const progress = Math.min(elapsedTime / duration, 1); // limit progress to 1
                      const currentPercent = Math.floor(progress * end);
                    prozent.textContent = currentPercent + '%';
                    progressBar6.style.width = '98%'; 
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    }
                }
                requestAnimationFrame(update);
}

function tuchUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Измените значение на сколько нужно прокрутить, чтобы фон появился
        navbar.classList.add('navbar-bg');
    } else {
        navbar.classList.remove('navbar-bg');
    }
});
function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => {
    element.classList.remove('shake');
    }, 500); // Duration of the animation
}

function Mfp(){
    document.getElementById('clickButton2').addEventListener('click', function() {
        
        let newTab = window.open('', '_blank');

        newTab.location.href = 'https://youtube.com/playlist?list=PLmPxzBZu-JytSrJHZDShi3Ftr605pLlPB&si=coe6t9Hripo2QBPG';
    });
}

let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShows: true,
    },
        pagination: {
            el: ".swiper-pagination"
        }
})
