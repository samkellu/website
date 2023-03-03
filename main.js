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
}
  

