// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('header');
const allLinks = document.querySelectorAll('a[href^="#"]');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
        navbar.style.backgroundColor = 'rgba(10, 10, 26, 0.95)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
        navbar.style.backgroundColor = 'rgba(10, 10, 26, 0.8)';
    }
});

// Smooth scrolling for anchor links
allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 70;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.03)';
        this.style.boxShadow = 'var(--shadow-lg), var(--shadow-glow)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'var(--shadow-md)';
    });
});

// Add typing animation to hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    // Type effect
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start the typing animation
    setTimeout(typeWriter, 500);
});

// Add animation to skills on scroll
const skillsSection = document.querySelector('.skills');
const skillItems = document.querySelectorAll('.skills-list span');

const animateSkills = () => {
    const triggerBottom = window.innerHeight * 0.8;
    const skillsTop = skillsSection.getBoundingClientRect().top;
    
    if (skillsTop < triggerBottom) {
        skillItems.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
};

// Initial styles for skills animation
skillItems.forEach(skill => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Trigger animations on scroll
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Create stars in the background
function createStars() {
    const stars = document.querySelector('.stars');
    const screenWidth = window.innerWidth;
    const screenHeight = document.body.scrollHeight;
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * screenWidth;
        const y = Math.random() * screenHeight;
        
        // Random size (0.5px to 3px)
        const size = Math.random() * 2.5 + 0.5;
        
        // Random opacity (0.3 to 1)
        const opacity = Math.random() * 0.7 + 0.3;
        
        // Random twinkling duration (3s to 8s)
        const duration = Math.random() * 5 + 3;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.opacity = opacity;
        star.style.animationDuration = `${duration}s`;
        
        stars.appendChild(star);
    }
}

// Create shooting stars
function animateShootingStars() {
    const shootingStars = document.querySelectorAll('.shooting-star');
    
    shootingStars.forEach(star => {
        // Random position
        const startX = Math.random() * 100;
        const startY = Math.random() * 30;
        
        // Random duration between 2s and 6s
        const duration = Math.random() * 4 + 2;
        
        // Random delay between 0s and 15s
        const delay = Math.random() * 15;
        
        star.style.left = `${startX}%`;
        star.style.top = `${startY}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
    });
}

// Animate the planet
function animatePlanet() {
    const planet = document.querySelector('.planet');
    if (planet) {
        planet.style.animationDuration = '120s';
    }
}

// Animate orbit
function animateOrbit() {
    const orbit = document.querySelector('.orbit');
    if (orbit) {
        const orbitSpeed = 20; // seconds per rotation
        orbit.style.animationDuration = `${orbitSpeed}s`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    animateShootingStars();
    animatePlanet();
    animateOrbit();
    
    // Add 3D tilt effect on project cards
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Calculate the angle of tilt (max 10 degrees)
            const maxTilt = 8;
            const tiltX = ((mouseY - cardCenterY) / (cardRect.height / 2)) * maxTilt;
            const tiltY = -((mouseX - cardCenterX) / (cardRect.width / 2)) * maxTilt;
            
            // Apply the transform
            this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
        });
    });
}); 