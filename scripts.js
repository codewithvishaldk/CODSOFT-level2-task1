document.getElementById('more-info-btn').addEventListener('click', function() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Read More';
    }
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.content-section');
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
