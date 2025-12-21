/**
 * Google Analytics Event Tracking
 * Author: Renato
 * Description: Custom event tracking for portfolio interactions
 */

(function() {
    'use strict';

    // Check if gtag is available
    if (typeof gtag === 'undefined') {
        console.warn('Google Analytics not loaded. Events will not be tracked.');
        return;
    }

    /**
     * Track custom events
     * @param {string} eventName - Name of the event
     * @param {object} params - Event parameters
     */
    function trackEvent(eventName, params = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, params);
        }
    }

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        
        // Track Project Card Clicks
        const projectCards = document.querySelectorAll('[data-project-name]');
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const projectName = this.getAttribute('data-project-name');
                trackEvent('project_view', {
                    'project_name': projectName,
                    'event_category': 'Projects',
                    'event_label': projectName
                });
            });
        });

        // Track GitHub Links
        const githubLinks = document.querySelectorAll('a[href*="github.com"]');
        githubLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                const isProfile = href.includes('github.com/renatobbarros') && !href.includes('/');
                
                trackEvent('github_click', {
                    'link_url': href,
                    'link_type': isProfile ? 'profile' : 'repository',
                    'event_category': 'Social',
                    'event_label': href
                });
            });
        });

        // Track LinkedIn Link
        const linkedinLinks = document.querySelectorAll('a[href*="linkedin.com"]');
        linkedinLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('linkedin_click', {
                    'event_category': 'Social',
                    'event_label': 'LinkedIn Profile'
                });
            });
        });

        // Track Instagram Link
        const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
        instagramLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('instagram_click', {
                    'event_category': 'Social',
                    'event_label': 'Instagram Profile'
                });
            });
        });

        // Track CV Download
        const cvButton = document.querySelector('a[href*="curriculo.pdf"]');
        if (cvButton) {
            cvButton.addEventListener('click', function() {
                trackEvent('cv_download', {
                    'event_category': 'Engagement',
                    'event_label': 'CV Download'
                });
            });
        }

        // Track Email Contact
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('email_contact', {
                    'event_category': 'Contact',
                    'event_label': 'Email Click'
                });
            });
        });

        // Track Contact Form Submit
        const contactForm = document.querySelector('form[action^="mailto:"]');
        if (contactForm) {
            contactForm.addEventListener('submit', function() {
                trackEvent('contact_form_submit', {
                    'event_category': 'Contact',
                    'event_label': 'Form Submission'
                });
            });
        }

        // Track Language Toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', function() {
                const currentLang = document.documentElement.lang;
                const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
                
                trackEvent('language_change', {
                    'event_category': 'Preferences',
                    'event_label': `Changed to ${newLang}`,
                    'from_language': currentLang,
                    'to_language': newLang
                });
            });
        }

        // Track Section Views (using Intersection Observer)
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    trackEvent('section_view', {
                        'event_category': 'Navigation',
                        'event_label': sectionId,
                        'section_name': sectionId
                    });
                    // Unobserve after first view to avoid duplicate events
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 // Section is considered viewed when 50% visible
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

        // Track "Explore Projects" CTA Button
        const exploreButton = document.querySelector('a[href="#work"]');
        if (exploreButton) {
            exploreButton.addEventListener('click', function() {
                trackEvent('cta_click', {
                    'event_category': 'Engagement',
                    'event_label': 'Explore Projects',
                    'cta_type': 'hero_button'
                });
            });
        }

        // Track Resume/CV Button in Navigation
        const navResumeButton = document.querySelector('nav button.btn-neon');
        if (navResumeButton) {
            navResumeButton.addEventListener('click', function() {
                trackEvent('resume_click', {
                    'event_category': 'Engagement',
                    'event_label': 'Resume Button Nav'
                });
            });
        }

        // Track Scroll Depth (25%, 50%, 75%, 100%)
        let scrollDepths = [25, 50, 75, 100];
        let trackedDepths = new Set();

        window.addEventListener('scroll', function() {
            const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
            
            scrollDepths.forEach(depth => {
                if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
                    trackedDepths.add(depth);
                    trackEvent('scroll_depth', {
                        'event_category': 'Engagement',
                        'event_label': `${depth}% Scrolled`,
                        'scroll_percentage': depth
                    });
                }
            });
        });

        // Track Time on Page (beacon on page exit)
        let startTime = Date.now();
        window.addEventListener('beforeunload', function() {
            const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds
            
            trackEvent('time_on_page', {
                'event_category': 'Engagement',
                'event_label': `${timeSpent} seconds`,
                'time_seconds': timeSpent
            });
        });

    });

})();
