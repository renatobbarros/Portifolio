/**
 * Internationalization System (i18n)
 * Author: Renato
 * Description: Multi-language support with auto-detection
 */

(function() {
    'use strict';

    // Translation dictionary
    const translations = {
        'pt-BR': {
            // Meta
            'meta.description': 'Renato - Estudante de Sistemas de Informação e Full-Stack Engineer. Portfolio de projetos e habilidades técnicas.',
            'meta.title': 'Renato | Full-Stack Engineer',
            
            // Header
            'nav.about': '01.Sobre',
            'nav.projects': '02.Projetos',
            'nav.stack': '03.Arsenal',
            'nav.contact': '04.Contato',
            'nav.resume': 'Resumo',
            
            // Hero Section
            'hero.status': 'Disponivel para contratação',
            'hero.title1': 'Estudante de',
            'hero.title2': 'Sistemas de Informação',
            'hero.title3': '& Curioso por Natureza',
            'hero.subtitle1': 'Renato | Estudante de BSI & dados e software',
            'hero.subtitle2': 'Criando soluções escaláveis e insights com dados.',
            'hero.cta.projects': 'Explore meus projetos',
            'hero.cta.cv': 'Download CV',
            
            // About Section
            'about.label': 'O estudante',
            'about.title': 'Sobre Mim',
            'about.heading1': 'Engenharia Lógica',
            'about.heading2': 'Criatividade Humana',
            'about.description': 'Além do código, sou estudante de Bacharelado em Sistemas de Informação (BSI), profundamente imerso na filosofia de construir sistemas e manipulação de dados que servem às pessoas.',
            'about.description2': 'Minha abordagem combina pensamento arquitetônico rigoroso, uma experiência de usuário intuitiva, criatividade humana e utilização de IA como ferramenta para a otimização de tempo e qualidade dos resultados. Eu não apenas escrevo prompts e funções, vou muito além disso eu crio ecossistemas digitais onde os dados fluem perfeitamente e as interfaces respondem instantaneamente. Cada ponto e vírgula tem um propósito, cada pixel uma razão.',
            'about.role': 'Estudante de BSI ',
            'about.roleSubtitle': 'Excelência Acadêmica',
            'about.problemSolver': 'Resolutor de problemas',
            'about.problemSolverSubtitle': 'Abordagem Analítica',
            'about.location': 'Baseado em São Paulo, Brasil',
            
            // Projects Section
            'projects.label': '02. Meus projetos',
            'projects.title': 'Projetos',
            'projects.description': 'Uma seleção dos meus melhores projetos de engenharia de software, destacando soluções inovadoras e impacto real.',
            'projects.github': 'Ver no GitHub',
            
            // Project 1
            'project1.title': 'Agenda HOROGO',
            'project1.description': 'Meu primeiro projeto, desenvolvido em python para uma cadeira da faculdade. Foi construido para ser simples, rapido e aprender a utilizar as boas praticas do python.',
            'project1.outcome': 'Resultado chave',
            'project1.outcomeText': 'Uma agenda gamificada real rodada pelo terminal que mitiga problemas reais de estudantes quanto a organização de tarefas e compromissos.',
            'project1.link': 'Ver mais no GitHub',
            
            // Project 2
            'project2.title': 'A guiden friend',
            'project2.description': 'Jogo criado para consolidar os conhecimentos da cadeira "principios de programação" onde eu pude deixar minha criatividade correr solta criando uma historia de uma criança correndo do papa figo e sendo ajudada pela comadre florzinha.',
            'project2.outcome': 'Resuldado chave',
            'project2.outcomeText': 'proporsiona diversão e medo tanto para os desenvolvedores quanto para os jogadores.',
            'project2.link': 'Ver mais no GitHub',
            
            // Project 3
            'project3.title': 'Site The five of wall Street',
            'project3.description': 'Construido para testar minhas habilidades em desenvolvimento web assistido por IA, este site apresenta um design moderno e funcionalidade robusta, tudo criado com a ajuda do GitHub Copilot.',
            'project3.outcome': 'Resultado chave',
            'project3.outcomeText': 'Serviu como a cereja do bolo de um processo seletivo que fiz para uma empresa junior e tive o privilegio de passar.',
            'project3.link': 'Veja mais no GitHub',
            
            // Skills Section
            'skills.label': '03. Minhas capacidades',
            'skills.title': 'Arsenal Técnico',
            'skills.description': 'Minha experiência técnica com as tecnologias mais recentes e relevantes do mercado',
            
            'skills.frontend': 'Minhas Stacks',
            'skills.backend': 'Backend',
            'skills.database': 'Banco de Dados',
            'skills.ai': 'Ferramentas de IA',
            
            // Frontend Skills
            'skill.react': 'Biblioteca JavaScript para interfaces de usuário modernas e reativas',
            'skill.next': 'Framework React para aplicações web com renderização híbrida',
            'skill.tailwind': 'Framework CSS utilitário para estilização rápida e responsiva',
            
            // Backend Skills
            'skill.python': 'Linguagem versátil para desenvolvimento web, dados e automação',
            'skill.pythonDesc': 'Linguagem versátil e poderosa',
            'skill.django': 'Framework Python robusto para aplicações web escaláveis',
            'skill.node': 'Runtime JavaScript para construir servidores e APIs eficientes',
            
            // Database Skills
            'skill.postgresql': 'Sistema de banco de dados relacional poderoso e confiável',
            'skill.mongodb': 'Banco de dados NoSQL flexível e orientado a documentos',
            'skill.sql': 'SQL',
            'skill.sqlDesc': 'Linguagem de consulta padrão',
            'skill.mysql': 'MySQL',
            'skill.mysqlDesc': 'Sistema de gerenciamento relacional',
            
            // AI Tools
            'skill.openai': 'Plataforma de IA para integrar modelos de linguagem avançados',
            'skill.anthropic': 'IA conversacional Claude para assistência inteligente',
            'skill.copilot': 'GitHub Copilot',
            'skill.copilotDesc': 'Assistente de programação IA',
            'skill.stitch': 'Stitch',
            'skill.stitchDesc': 'Gerador de interfaces IA',
            'skill.gemini': 'Gemini',
            'skill.geminiDesc': 'Modelo de linguagem do Google',
            'skill.nanoBanana': 'Nano Banana',
            'skill.nanoBananaDesc': 'Modelo experimental de IA',
            
            // Contact Section
            'contact.label': '04. Entrar em contato',
            'contact.title': 'Vamos conversar?',
            'contact.description': 'Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia, um projeto ou apenas quer bater um papo sobre tecnologia, fique à vontade para me enviar um email!',
            'contact.email.title': 'Email',
            'contact.email.desc': 'Respondo geralmente em até 24 horas',
            'contact.social.title': 'Redes Sociais',
            'contact.availability.title': 'Disponibilidade',
            'contact.availability.desc': 'Disponível para projetos freelance e oportunidades de tempo integral',
            'contact.form.title': 'Envie uma mensagem',
            'contact.form.name': 'Seu Nome',
            'contact.form.email': 'Seu Email',
            'contact.form.message': 'Mensagem',
            'contact.form.submit': 'Enviar Mensagem',
            
            // Footer
            'footer.tagline': 'Engenheiro de software e dados em construção.',
            'footer.text': 'Desenvolvido e projetado por Renato',
            'footer.rights': 'Todos os direitos reservados.'
        },
        
        'en': {
            // Meta
            'meta.description': 'Renato - Information Systems Student and Full-Stack Engineer. Portfolio of projects and technical skills.',
            'meta.title': 'Renato | Full-Stack Engineer',
            
            // Header
            'nav.about': '01.About',
            'nav.projects': '02.Projects',
            'nav.stack': '03.Stack',
            'nav.contact': '04.Contact',
            'nav.resume': 'Resume',
            
            // Hero Section
            'hero.status': 'Available for hire',
            'hero.title1': 'Student of',
            'hero.title2': 'Information Systems',
            'hero.title3': '& Naturally Curious',
            'hero.subtitle1': 'Renato | IS Student & data and software',
            'hero.subtitle2': 'Building scalable solutions and insights with data.',
            'hero.cta.projects': 'Explore my projects',
            'hero.cta.cv': 'Download CV',
            
            // About Section
            'about.label': 'The student',
            'about.title': 'About Me',
            'about.heading1': 'Logical Engineering',
            'about.heading2': 'Human Creativity',
            'about.description': 'Beyond code, I am a Bachelor of Information Systems (BIS) student, deeply immersed in the philosophy of building systems and data manipulation that serve people.',
            'about.description2': 'My approach combines rigorous architectural thinking, intuitive user experience, human creativity, and the use of AI as a tool for optimizing time and quality of results. I don\'t just write prompts and functions, I go far beyond that—I create digital ecosystems where data flows seamlessly and interfaces respond instantly. Every semicolon has a purpose, every pixel a reason.',
            'about.role': 'BIS Student ',
            'about.roleSubtitle': 'Academic Excellence',
            'about.problemSolver': 'Problem Solver',
            'about.problemSolverSubtitle': 'Analytical Approach',
            'about.location': 'Based in São Paulo, Brazil',
            
            // Projects Section
            'projects.label': '02. My projects',
            'projects.title': 'Projects',
            'projects.description': 'A selection of my best software engineering projects, showcasing innovative solutions and real impact.',
            'projects.github': 'View on GitHub',
            
            // Project 1
            'project1.title': 'HOROGO Schedule',
            'project1.description': 'My first project, developed in Python for a college course. It was built to be simple, fast, and to learn Python best practices.',
            'project1.outcome': 'Key Result',
            'project1.outcomeText': 'A real gamified schedule run from the terminal that mitigates real problems students face with task and appointment organization.',
            'project1.link': 'See more on GitHub',
            
            // Project 2
            'project2.title': 'A guiding friend',
            'project2.description': 'Game created to consolidate knowledge from the "programming principles" course where I could let my creativity run wild creating a story about a child running from Papa Figo and being helped by Comadre Florzinha.',
            'project2.outcome': 'Key Result',
            'project2.outcomeText': 'Provides fun and fear for both developers and players.',
            'project2.link': 'See more on GitHub',
            
            // Project 3
            'project3.title': 'The five of wall Street website',
            'project3.description': 'Built to test my AI-assisted web development skills, this website features modern design and robust functionality, all created with the help of GitHub Copilot.',
            'project3.outcome': 'Key Result',
            'project3.outcomeText': 'Served as the cherry on top of a selection process I went through for a junior company and I had the privilege of passing.',
            'project3.link': 'See more on GitHub',
            
            // Skills Section
            'skills.label': '03. My capabilities',
            'skills.title': 'Technical Arsenal',
            'skills.description': 'My technical expertise with the latest and most relevant market technologies',
            
            'skills.frontend': 'My Stacks',
            'skills.backend': 'Backend',
            'skills.database': 'Database',
            'skills.ai': 'AI Tools',
            
            // Frontend Skills
            'skill.react': 'JavaScript library for modern and reactive user interfaces',
            'skill.next': 'React framework for web applications with hybrid rendering',
            'skill.tailwind': 'Utility CSS framework for fast and responsive styling',
            
            // Backend Skills
            'skill.python': 'Versatile language for web development, data and automation',
            'skill.pythonDesc': 'Versatile and powerful language',
            'skill.django': 'Robust Python framework for scalable web applications',
            'skill.node': 'JavaScript runtime for building efficient servers and APIs',
            
            // Database Skills
            'skill.postgresql': 'Powerful and reliable relational database system',
            'skill.mongodb': 'Flexible document-oriented NoSQL database',
            'skill.sql': 'SQL',
            'skill.sqlDesc': 'Standard query language',
            'skill.mysql': 'MySQL',
            'skill.mysqlDesc': 'Relational management system',
            
            // AI Tools
            'skill.openai': 'AI platform to integrate advanced language models',
            'skill.anthropic': 'Claude conversational AI for intelligent assistance',
            'skill.copilot': 'GitHub Copilot',
            'skill.copilotDesc': 'AI programming assistant',
            'skill.stitch': 'Stitch',
            'skill.stitchDesc': 'AI interface generator',
            'skill.gemini': 'Gemini',
            'skill.geminiDesc': 'Google language model',
            'skill.nanoBanana': 'Nano Banana',
            'skill.nanoBananaDesc': 'Experimental AI model',
            
            // Contact Section
            'contact.label': '04. Get in touch',
            'contact.title': 'Let\'s talk?',
            'contact.description': 'I\'m always open to new opportunities and interesting projects. If you have an idea, a project, or just want to chat about technology, feel free to send me an email!',
            'contact.email.title': 'Email',
            'contact.email.desc': 'I usually respond within 24 hours',
            'contact.social.title': 'Social Media',
            'contact.availability.title': 'Availability',
            'contact.availability.desc': 'Available for freelance projects and full-time opportunities',
            'contact.form.title': 'Send a message',
            'contact.form.name': 'Your Name',
            'contact.form.email': 'Your Email',
            'contact.form.message': 'Message',
            'contact.form.submit': 'Send Message',
            
            // Footer
            'footer.tagline': 'Software and data engineer in progress.',
            'footer.text': 'Developed and designed by Renato',
            'footer.rights': 'All rights reserved.'
        }
    };

    // Current language
    let currentLang = 'pt-BR';

    /**
     * Detect user's preferred language
     */
    function detectLanguage() {
        // Check localStorage
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        
        // Check if it's Portuguese
        if (browserLang.startsWith('pt')) {
            return 'pt-BR';
        }
        
        // Default to English for other languages
        return 'en';
    }

    /**
     * Apply translations to the page
     */
    function applyTranslations(lang) {
        currentLang = lang;
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang === 'pt-BR' ? 'pt-BR' : 'en');
        
        // Update meta tags
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations[lang]['meta.description']);
        }
        document.title = translations[lang]['meta.title'];
        
        // Batch DOM updates for better performance
        requestAnimationFrame(() => {
            // Update all elements with data-i18n attribute
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
            
            // Update language toggle button
            updateLanguageToggle();
        });
    }

    /**
     * Update language toggle button text
     */
    function updateLanguageToggle() {
        const toggle = document.getElementById('langToggle');
        if (toggle) {
            toggle.textContent = currentLang === 'pt-BR' ? 'EN' : 'PT';
            toggle.setAttribute('title', currentLang === 'pt-BR' ? 'Switch to English' : 'Mudar para Português');
        }
    }

    /**
     * Toggle between languages
     */
    function toggleLanguage() {
        const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
        applyTranslations(newLang);
        
        // Update projects if projectsManager is available
        if (window.projectsManager && typeof window.projectsManager.updateLanguage === 'function') {
            window.projectsManager.updateLanguage(newLang);
        }
    }

    /**
     * Initialize i18n system
     */
    function init() {
        const detectedLang = detectLanguage();
        applyTranslations(detectedLang);
        
        // Setup language toggle button
        const toggle = document.getElementById('langToggle');
        if (toggle) {
            toggle.addEventListener('click', toggleLanguage);
        }
    }

    // Expose to global scope
    window.i18n = {
        init: init,
        toggle: toggleLanguage,
        getCurrentLang: () => currentLang,
        setLang: applyTranslations
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
