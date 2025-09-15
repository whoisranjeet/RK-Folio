// Custom JavaScript from index.html moved to external JS
function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.to('#hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power4.out' });
    gsap.to('#hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power4.out' });
    gsap.to('#hero-cta', { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power4.out' });
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top bottom-=100', toggleActions: 'play none none reverse' },
            opacity: 0, y: 50, duration: 0.6, delay: i * 0.1
        });
    });
    // Animate the rotator group
    const rotator = document.getElementById('collab-rotator');
    if(rotator) {
        rotator.style.animation = 'collab-rotate 18s linear infinite';
    }
});

(function() {
    const slider = document.getElementById('skills-slider');
    if (!slider) return;
    const parent = slider.parentElement;
    const minWidth = parent.offsetWidth * 2;
    let totalWidth = slider.scrollWidth;
    let clones = [];
    while (totalWidth < minWidth) {
        Array.from(slider.children).forEach(child => {
            const clone = child.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            slider.appendChild(clone);
            clones.push(clone);
        });
        totalWidth = slider.scrollWidth;
    }
    let sliderPosition = 0;
    function animateSlider() {
        sliderPosition -= 0.5;
        if (Math.abs(sliderPosition) >= totalWidth / 2) sliderPosition = 0;
        slider.style.transform = `translateX(${sliderPosition}px)`;
        requestAnimationFrame(animateSlider);
    }
    animateSlider();
})();

const goTopBtn = document.getElementById('goTopBtn');
window.addEventListener('scroll', () => {
    goTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const centerX = rect.width / 2, centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 6, rotateY = ((x - centerX) / centerX) * -6;
        card.style.transform = `scale(1.035) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.classList.remove('hovered');
    });
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });
});

goTopBtn.addEventListener('mousemove', e => {
    const rect = goTopBtn.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const centerX = rect.width / 2, centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 28, rotateY = ((x - centerX) / centerX) * -28;
    goTopBtn.style.setProperty('--rotateX', `${rotateX}deg`);
    goTopBtn.style.setProperty('--rotateY', `${rotateY}deg`);
    goTopBtn.style.transform = `scale(1.18) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    goTopBtn.classList.add('hovered');
});
goTopBtn.addEventListener('mouseleave', () => {
    goTopBtn.style.transform = '';
    goTopBtn.classList.remove('hovered');
});
goTopBtn.addEventListener('mouseenter', () => {
    goTopBtn.classList.add('hovered');
});

function sanitizeInput(str) {
    return str.replace(/[&<>"]/g, function(tag) {
        const chars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;'
        };
        return chars[tag] || tag;
    });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.style.display = 'none';
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    if (name) name = name[0].toUpperCase() + name.slice(1);
    if (message) {
        message = message.replace(/\s+/g, ' ');
        message = message[0].toUpperCase() + message.slice(1);
        message = message.replace(/([.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
    }
    // Sanitize inputs
    name = sanitizeInput(name);
    email = sanitizeInput(email);
    message = sanitizeInput(message);
    emailjs.send('service_bvhsxhg', 'template_yzlxofp', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function() {
        status.textContent = 'Message sent successfully!';
        status.style.display = 'block';
        status.style.color = '#4ade80';
        document.getElementById('contact-form').reset();
    }, function() {
        status.textContent = 'Failed to send message. Please try again.';
        status.style.display = 'block';
        status.style.color = '#f87171';
    });
});
