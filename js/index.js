let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let wrapper = document.querySelector ('.wrapper');
let otherApps = document.querySelector ('.other-apps');
let backdrop = document.querySelector ('.backdrop');
let bodyOverflow = document.querySelector ('body');


menuBtn.addEventListener("click", function (){
    otherApps.style.display = 'block';
    backdrop.style.display = 'block';
    wrapper.classList.toggle('transform-active');
    bodyOverflow.style.overflow = 'hidden';
});

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        otherApps.style.display = ('none');
        backdrop.style.display = ('none');
        bodyOverflow.style.overflow = 'visible';
    }
});

let arrayOfNavItems = Array.from(document.querySelectorAll('.redStyle'));
    arrayOfNavItems.forEach(function(element){
        element.addEventListener('click', function(){
            element.classList.add('redStyleColor');
            console.log(element)
        });
        
        if (element.classList.contains('redStyleColor')){
            element.classList.remove('redStyleColor');
        }
    });
