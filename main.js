const links = ["projects.html", "https://www.instagram.com/sam_kelly_/", "https://github.com/samkellu"];

window.onload = () => {
    const tr_load_el = document.querySelectorAll('.transition_load');
    const tr_leave_el = document.querySelectorAll('.transition_leave');
    const checkboxes = document.getElementsByName('slider');
    
    setTimeout(() => {
        for (let j = 0; j < tr_load_el.length; j++) {
            tr_load_el[j].classList.remove('active');
        }
    }, 800);

    for (let checkbox of checkboxes) {

        checkbox.onclick = function(e) {
            for (let c of checkboxes) {
                if (c == checkbox) {
                    continue;
                }

                c.checked = false;
            }

            if (!checkbox.checked) {
                e.preventDefault();
                for (let j = 0; j < tr_leave_el.length; j++) {
                    tr_leave_el[j].classList.add('active');
                }
                
                setTimeout(() => {
                    window.location.href = checkbox.getAttribute("href");
                }, 800);
            }
        }
    }
}

window.addEventListener("scroll", reveal);

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


  

