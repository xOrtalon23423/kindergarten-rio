// GSAP Animations for Header Elements
window.onload = function () {
    gsap.from([".animate-heading", ".animate-paragraph", ".animate-button"], {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3 // Apply stagger for smooth sequential animation
    });

    // Animate the image sliding in from the left and text from the right
    gsap.from(".about-image img", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".about-text", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
    });

    // Animate the feature sections on scroll
    gsap.utils.toArray(".feature").forEach(feature => {
        gsap.from(feature, {
            scrollTrigger: {
                trigger: feature,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
};

// Testimonial hover effect
document.querySelectorAll('.testimonial-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!item.querySelector('.testimonial-info')) {
            const info = item.getAttribute('data-info');
            const infoElement = document.createElement('div');
            infoElement.classList.add('testimonial-info');
            infoElement.innerText = info;
            item.appendChild(infoElement);
        }
    });

    item.addEventListener('mouseleave', () => {
        const infoElement = item.querySelector('.testimonial-info');
        if (infoElement) {
            infoElement.remove();
        }
    });
});

// Scroll to Top function
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
};

scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Anchor link smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        gsap.to(window, {
            scrollTo: this.getAttribute('href'),
            duration: 1,
            ease: "power2.inOut"
        });
    });
});

// Repeated animation on features (optional if you want a continuous loop effect)
gsap.to(".feature", {
    keyframes: [
        { y: -20, duration: 0.5 },
        { y: 0, duration: 0.3, ease: "bounce.out" },
        { rotate: 360, duration: 1, ease: "power4.inOut" }
    ],
    repeat: -1, // Infinite loop
    yoyo: true // Reverse the animation on every repeat
});

// Scroll to Top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the button after scrolling 100px
window.onscroll = function() {
    let scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
};

