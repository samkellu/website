window.onload = () => {
    const tr_load_el = document.querySelectorAll('.transition_load');
    const tr_leave_el = document.querySelectorAll('.transition_leave');
    const anchors = document.querySelectorAll('a');

    
    setTimeout(() => {
        for (let j = 0; j < tr_load_el.length; j++) {
            tr_load_el[j].classList.remove('active');
        }
    }, 800);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();

            let target = e.target.href;

            for (let j = 0; j < tr_leave_el.length; j++) {
                tr_leave_el[j].classList.add('active');
            }

            setTimeout(() => {
                window.location.href = target;
            }, 800);
        });
    }
    reveal();
}

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

window.addEventListener("scroll", reveal);

  

