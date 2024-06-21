document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.animate-text');
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = 1; 
            text.style.animation = `typing 4s steps(40, end) forwards, blink-caret 0.75s step-end infinite`;
            text.style.animationFillMode = 'forwards'; 

            setTimeout(() => {
                text.classList.add('no-caret');
            }, 4000); 
        }, index * 4000); 
    });
});