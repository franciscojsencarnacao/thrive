// THRIVE - Interactive Scripts

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Rotating text animation
const words1 = ['ACCURATE', 'TRUSTWORTHY', 'PROFITABLE'];
const words2 = ['SUCCESS', 'GROWTH', 'INCOME'];

function rotateText(elementId, words) {
    const el = document.getElementById(elementId);
    if (!el) return;
    let index = 0;
    setInterval(() => {
        el.style.opacity = '0';
        setTimeout(() => {
            index = (index + 1) % words.length;
            el.textContent = words[index];
            el.style.opacity = '1';
        }, 300);
    }, 2500);
}

rotateText('rotatingText', words1);
rotateText('rotatingText2', words2);

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.service-item, .step, .testimonial-card, .price-card').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        }
    });
});
