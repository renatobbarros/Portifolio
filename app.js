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
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const langToggleMobile = document.getElementById('langToggleMobile');
        const langToggle = document.getElementById('langToggle');
        
        // Open mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        }
        
        // Close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrolling
            }, 300);
        }
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }
        
        // Close menu when clicking nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
        
        // Sync language toggle between desktop and mobile
        if (langToggleMobile && langToggle) {
            langToggleMobile.addEventListener('click', function() {
                langToggle.click(); // Trigger desktop button (which has i18n logic)
            });
            
            // Sync text content
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'childList' || mutation.type === 'characterData') {
                        langToggleMobile.textContent = langToggle.textContent;
                    }
                });
            });
            
            observer.observe(langToggle, {
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        });
    }

    /**
     * Setup scroll-based animations
     */
    function setupAnimations() {
        // Check if browser supports IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers - show all content
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => {
                el.style.opacity = '1';
            });
            return;
        }

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Add animation classes to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            if (!section.classList.contains('animate-on-scroll')) {
                section.classList.add('animate-on-scroll', 'fade-in-up');
                // Add staggered delay
                if (index > 0) {
                    section.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });

        // Animate cards and items
        const cards = document.querySelectorAll('.glass-panel, .skill-node');
        cards.forEach((card, index) => {
            if (!card.classList.contains('animate-on-scroll')) {
                card.classList.add('animate-on-scroll', 'scale-in');
                card.style.animationDelay = `${(index % 3) * 0.1}s`;
                observer.observe(card);
            }
        });
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
