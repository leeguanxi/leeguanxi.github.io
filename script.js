// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById('contactModal');
const openBtn = document.querySelector('.msg-popup');
const closeBtn = document.getElementById('closeModal');

// Open Modal
openBtn.addEventListener('click', () => {
    console.log("Button was clicked!");
    modal.classList.add('active');
});

// Close Modal via "X" button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close Modal by clicking the background (overlay)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});