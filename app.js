const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });


        navLinks.forEach(link => link.classList.remove('active-link'));
        

        link.classList.add('active-link');
    });
});
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
    navLinks.forEach(link => {
        const section = document.getElementById(link.getAttribute('href').substring(1));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});
