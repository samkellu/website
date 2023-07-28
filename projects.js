window.onload = () => {
    const tr_load_el = document.querySelectorAll('.transition_load');
    const tr_leave_el = document.querySelectorAll('.transition_leave');
    const anchors = document.querySelectorAll('a');
    
    setTimeout(() => {
        for (let j = 0; j < tr_load_el.length; j++) {
            tr_load_el[j].classList.remove('active');
        }
    }, 800);

    for (let anchor of anchors) {

        anchor.addEventListener('click', e => {
            e.preventDefault();

            for (let j = 0; j < tr_leave_el.length; j++) {
                tr_leave_el[j].classList.add('active');
            }

            setTimeout(() => {
                window.location.href = e.target.href;
            }, 800);
        });
    }
}


window.addEventListener("scroll", reveal);
window.addEventListener("scroll", changeColour);

function reveal() {
    var toReveal = document.querySelectorAll(".reveal");

    for (var i = 0; i < toReveal.length; i++) {
        var windowHeight = window.innerHeight;
        // distance to the top of the element from the top of the viewport.
        var elementTop = toReveal[i].getBoundingClientRect().top;
        var revealHeight = 150;

        if (elementTop < windowHeight - revealHeight) {
            toReveal[i].classList.add("active");
        } else {
            toReveal[i].classList.remove("active");
        }
    }
}

function changeColour() {
    var distToTop = window.scrollY;
    var r = (219 - (scrollY/document.body.scrollHeight) * 140);
    var g = (127 - (scrollY/document.body.scrollHeight) * 80);
    var b = (80 + (scrollY/document.body.scrollHeight) * 120);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
// 219,127,80
// 127,133,99


  

