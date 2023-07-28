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


  

