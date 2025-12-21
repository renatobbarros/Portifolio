/**
 * Portfolio Interactive Features
 * Author: Renato
 * Description: Main JavaScript file for portfolio interactivity
 */

(function() {
    'use strict';

    /**
     * Initialize the application
     */
    function init() {
        setupSmoothScrolling();
        setupMobileMenu();
        setupAnimations();
        setupActiveSection();
    }

    /**
     * Setup smooth scrolling for navigation links
     */
    function setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (targetId === '#') return;
                
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Setup mobile menu toggle
     */
    function setupMobileMenu() {
        const menuButton = document.querySelector('.md\\:hidden .material-symbols-outlined');
        
        if (menuButton) {
            menuButton.addEventListener('click', function() {
                // Future: Implement mobile menu toggle
                console.log('Mobile menu clicked - implement dropdown menu');
            });
        }
    }

    /**
     * Setup scroll-based animations
     */
    function setupAnimations() {
        // Check if browser supports IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            return; // Skip animations on older browsers
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));
    }

    /**
     * Highlight active navigation section
     */
    function setupActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('header a[href^="#"]');

        let ticking = false;

        function highlightActiveLink() {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                
                if (window.pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-white');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('text-white');
                }
            });

            ticking = false;
        }

        // Throttle scroll events for better performance
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    highlightActiveLink();
                });
                ticking = true;
            }
        }, { passive: true });

        highlightActiveLink();
    }

    /**
     * Wait for DOM to be ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
