/**
 * Projects Manager
 * Author: Renato
 * Description: Dynamic project loading system
 */

(function() {
    'use strict';

    let currentLang = 'pt-BR';

    /**
     * Projects data - Edit this array to add/remove/update projects
     */
    const projects = [
        {
            "id": "horogo",
            "title": {
                "pt-BR": "Agenda HOROGO",
                "en": "HOROGO Schedule"
            },
            "description": {
                "pt-BR": "Meu primeiro projeto, desenvolvido em python para uma cadeira da faculdade. Foi construido para ser simples, rapido e aprender a utilizar as boas praticas do python.",
                "en": "My first project, developed in Python for a college course. It was built to be simple, fast, and to learn Python best practices."
            },
            "outcome": {
                "pt-BR": "Uma agenda gamificada real rodada pelo terminal que mitiga <span class='text-accent-gold font-bold'>problemas reais</span> de estudantes quanto a organização de tarefas e compromissos.",
                "en": "A real gamified schedule run from the terminal that mitigates <span class='text-accent-gold font-bold'>real problems</span> students face with task and appointment organization."
            },
            "tags": ["Python", "Json"],
            "image": "src/img/horogo.png",
            "imageAlt": "Projeto Horogo - Agenda Gamificada",
            "githubUrl": "https://github.com/renatobbarros/Horogo/tree/main",
            "outcomeColor": "accent-gold"
        },
        {
            "id": "guiding-friend",
            "title": {
                "pt-BR": "A guiden friend",
                "en": "A guiding friend"
            },
            "description": {
                "pt-BR": "Jogo criado para consolidar os conhecimentos da cadeira \"principios de programação\" onde eu pude deixar minha criatividade correr solta criando uma historia de uma criança correndo do papa figo e sendo ajudada pela comadre florzinha.",
                "en": "Game created to consolidate knowledge from the \"programming principles\" course where I could let my creativity run wild creating a story about a child running from Papa Figo and being helped by Comadre Florzinha."
            },
            "outcome": {
                "pt-BR": "proporsiona <span class='text-primary font-bold'>diversão e medo</span> tanto para os desenvolvedores quanto para os jogadores.",
                "en": "Provides <span class='text-primary font-bold'>fun and fear</span> for both developers and players."
            },
            "tags": ["Ren'py", "Python", "Nano Banana"],
            "image": "src/img/a guiden friend.png",
            "imageAlt": "Projeto A Guiding Friend - Jogo Ren'py",
            "githubUrl": "https://github.com/renatobbarros/a-guiding-friend/tree/main",
            "outcomeColor": "primary"
        },
        {
            "id": "wall-street",
            "title": {
                "pt-BR": "Site The five of wall Street",
                "en": "The five of wall Street website"
            },
            "description": {
                "pt-BR": "Construido para testar minhas habilidades em desenvolvimento web assistido por IA, este site apresenta um design moderno e funcionalidade robusta, tudo criado com a ajuda do GitHub Copilot.",
                "en": "Built to test my AI-assisted web development skills, this website features modern design and robust functionality, all created with the help of GitHub Copilot."
            },
            "outcome": {
                "pt-BR": "Serviu como a <span class='text-accent-pink font-bold'>cereja do bolo</span> de um processo seletivo que fiz para uma empresa junior e tive o privilegio de passar.",
                "en": "Served as the <span class='text-accent-pink font-bold'>cherry on top</span> of a selection process I went through for a junior company and I had the privilege of passing."
            },
            "tags": ["Gemini", "Stitch", "GitHub Copilot"],
            "image": "src/img/wallstreet.PNG",
            "imageAlt": "Projeto Wall Street - Website desenvolvido com IA",
            "githubUrl": "https://github.com/renatobbarros/The-five-of-wallstreet---website",
            "outcomeColor": "accent-pink"
        }
    ];

    /**
     * Create project card HTML
     */
    function createProjectCard(project, lang) {
        const title = project.title[lang];
        const description = project.description[lang];
        const outcome = project.outcome[lang];
        const outcomeLabel = lang === 'pt-BR' ? 'Resultado chave' : 'Key Result';
        const linkText = lang === 'pt-BR' ? 'Ver mais no GitHub' : 'See more on GitHub';

        return `
            <article class="group mb-16 last:mb-0 @container">
                <div class="flex flex-col lg:flex-row bg-surface rounded-xl overflow-hidden border border-white/5 card-hover-glow transition-all duration-500 shadow-lg">
                    
                    <!-- Project Content -->
                    <div class="flex-1 p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1 relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <span class="material-symbols-outlined text-9xl">${title}</span>
                        </div>
                        
                        <div class="relative z-10">
                            <!-- Tags -->
                            <div class="flex gap-2 mb-4">
                                ${project.tags.map(tag => `
                                    <span class="px-2 py-1 rounded bg-white/5 text-xs font-mono text-slate-300 border border-white/10">${tag}</span>
                                `).join('')}
                            </div>
                            
                            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                ${title}
                            </h3>
                            
                            <p class="text-slate-400 mb-6 leading-relaxed">
                                ${description}
                            </p>
                            
                            <!-- Outcome -->
                            <div class="bg-background-dark/50 rounded-lg p-4 border-l-4 border-${project.outcomeColor} mb-8 shadow-inner">
                                <p class="font-mono text-xs text-${project.outcomeColor} mb-1">${outcomeLabel}</p>
                                <p class="text-white font-medium">
                                    ${outcome}
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 relative z-10">
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-primary font-bold text-sm hover:underline hover:text-primary-glow transition-colors">
                                <span>${linkText}</span>
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Project Image -->
                    <div class="flex-1 min-h-[300px] bg-background-dark order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5 relative group-hover:bg-background-dark/80 transition-colors">
                        <div class="absolute inset-0 p-8 flex items-center justify-center">
                            <img 
                                src="${project.image}"
                                alt="${project.imageAlt}"
                                loading="lazy"
                                decoding="async"
                                class="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            >
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    /**
     * Render all projects
     */
    function renderProjects(lang = 'pt-BR') {
        currentLang = lang;
        const container = document.getElementById('projects-container');
        
        if (!container) {
            console.error('Projects container not found');
            return;
        }

        if (projects.length === 0) {
            container.innerHTML = '<p class="text-slate-400 text-center">Nenhum projeto encontrado.</p>';
            return;
        }

        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        const tempDiv = document.createElement('div');
        
        projects.forEach(project => {
            tempDiv.innerHTML = createProjectCard(project, lang);
            fragment.appendChild(tempDiv.firstElementChild);
        });
        
        container.innerHTML = '';
        container.appendChild(fragment);
    }

    /**
     * Update projects when language changes
     */
    function updateProjectsLanguage(lang) {
        renderProjects(lang);
    }

    /**
     * Initialize projects system
     */
    function init() {
        // Get current language from i18n if available
        if (window.i18n && typeof window.i18n.getCurrentLang === 'function') {
            currentLang = window.i18n.getCurrentLang();
        }
        
        renderProjects(currentLang);
    }

    // Expose to global scope
    window.projectsManager = {
        init: init,
        updateLanguage: updateProjectsLanguage,
        renderProjects: renderProjects,
        projects: projects // Expose for easy editing
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
