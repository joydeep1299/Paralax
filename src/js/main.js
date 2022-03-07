let navigationBars = document.querySelector(".fa-bars")
let topbarNavigation = document.querySelector(".topbar__navigation")
let topbarAccountIcon = document.querySelector(".topbar__account")
// all the items selector
let items = document.querySelectorAll(".items")
// scroll down selector
let scrollDown = document.querySelector(".banner__body__scroll")
//  invalid link selector
let invalidIink = document.querySelectorAll(".invalid-link")
//  invalid modal selector
let invalidMsg = document.querySelector(".invalid-msg")
//  invalid modal close button
let invalidMsgClose = document.querySelector(".invalid-modal-remove")


/* 
navigation bar toggle 
*/
navigationBars.addEventListener("click", () => {
    topbarNavigation.classList.toggle("menu-active")
    topbarAccountIcon.classList.toggle("menu-active")
})

/* 
on scoll down button click 
*/
scrollDown.addEventListener("click", () => {
    window.scrollBy(0,700)
})

/* 
when some body clicks on the invalid buttons  error msg pop up
*/
for (let i = 0; i < invalidIink.length; i++) {
    invalidIink[i].addEventListener("click", () => {
        invalidMsg.style.display = "grid";
    })
}
// close the invalid modal
invalidMsgClose.addEventListener("click", () => {
    invalidMsg.style.display = "none";
})

// intersection observer options
const options = {
    threshold: .75,
};

//  intersecton observer
const observer = new IntersectionObserver(scrollIndicator, options);


// intersection observer callback
function scrollIndicator(entries) {
    entries.forEach(entry => {
        let scroll = entry.target.dataset.slider;
        let scrollIndicator = document.querySelector(".scroll__indicator--active");
        if (entry.isIntersecting) {
            if (scroll == 1) {
                scrollIndicator.style.transform = `translateY(30px)`;
            } else if (scroll == 2) {
                scrollIndicator.style.transform = `translateY(65px)`;
            } else if (scroll == 3) {
                scrollIndicator.style.transform = `translateY(105px)`;
            }
        } else {
            scrollIndicator.style.transform = `translateY(0px)`;
        }
    })
}
//  observing each item
items.forEach(item => {
    observer.observe(item);
})




// Paralax efffect

function paralax() {
    let images = document.querySelectorAll(".bg");
    let scroll = window.scrollY;
    images[0].style.top= `${0-scroll}px `
    images[1].style.top= `${360-(scroll/1.5)}px`
    // images[1].style.left= `${(scroll/5)}px `
    images[2].style.top= `${550-(scroll/2)}px `
    images[2].style.left= `${0-(scroll/5)}px `
}

window.addEventListener("scroll",paralax)