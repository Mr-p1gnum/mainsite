(function() {
    // ---------- МУЛЬТИЯЗЫЧНОСТЬ ----------
    const translations = {
        ru: {
            logo: "MainSelfSite",
            nav_home: "Главная",
            nav_features: "Навыки",
            nav_projects: "Проекты",
            nav_about: "О себе",
            hero_title: "Добро пожаловать на мой сайт",
            hero_desc: "Автоматический деплой через Gitlab CI/CD, хранение на своём сервере, полный самоконтроль.",
            hero_btn: "Смотреть проекты",
            features_title: "Что я умею",
            feature1_title: "Контейнеризация",
            feature1_desc: "Docker и docker-compose для любых проектов: от блога до высоконагруженных сервисов.",
            feature2_title: "CI/CD",
            feature2_desc: "Автоматические пайплайны GitLab CI: тесты, сборка, деплой одной командой git push.",
            feature3_title: "Self-hosting",
            feature3_desc: "Собственный сервер, свои правила. Никаких облачных ограничений.",
            feature4_title: "Безопасность",
            feature4_desc: "Настройка фаерволов, HTTPS, защита от атак — всё включено.",
            feature5_title: "Администрирование Linux",
            feature5_desc: "Управление серверами, написание скриптов, маппинг дисков, настройка сети.",
            projects_title: "Мои проекты",
            project1_title: "Инфраструктура как код",
            project1_desc: "Ansible, автоматическая настройка серверов.",
            project1_link: "Исходники →",
            project2_title: "Система мониторинга",
            project2_desc: "Prometheus + Grafana, дашборды для всех сервисов.",
            project2_link: "Исходники →",
            project3_title: "Вот этот сайт",
            project3_desc: "Автоматический деплой статики из GitLab CI на свой хост.",
            project3_link: "Исходники →",
            about_title: "Обо мне",
            about_desc: "",
            stats_btn: "📊 Статистика",
            stats_title: "Локальная статистика",
            stats_visits: "Заходов на страницу: ",
            stats_clicks: "Всего кликов: ",
            stats_recent: "Последние действия:",
            stats_clear: "Очистить статистику"
        },
        en: {
            logo: "MainSelfSite",
            nav_home: "Home",
            nav_features: "Skills",
            nav_projects: "Projects",
            nav_about: "About",
            hero_title: "Welcome to my site",
            hero_desc: "Auto-deploy via GitLab CI/CD, hosted on my own server, full self-control.",
            hero_btn: "View projects",
            features_title: "What I do",
            feature1_title: "Containerization",
            feature1_desc: "Docker and docker-compose for any project, from blogs to high-load services.",
            feature2_title: "CI/CD",
            feature2_desc: "Automated GitLab CI pipelines: tests, build, deploy with a single git push.",
            feature3_title: "Self-hosting",
            feature3_desc: "My server, my rules. No cloud limitations.",
            feature4_title: "Security",
            feature4_desc: "Firewall setup, HTTPS, DDoS protection — all included.",
            feature5_title: "Linux Administration",
            feature5_desc: "Server management, scripting, disk mapping, network setup.",
            projects_title: "My projects",
            project1_title: "Infrastructure as Code",
            project1_desc: "Ansible, automated server configuration.",
            project1_link: "Source →",
            project2_title: "Monitoring System",
            project2_desc: "Prometheus + Grafana dashboards for all services.",
            project2_link: "Source →",
            project3_title: "This website",
            project3_desc: "Automatic static site deployment from GitLab CI to my own host.",
            project3_link: "Source →",
            about_title: "About me",
            about_desc: "",
            stats_btn: "📊 Statistics",
            stats_title: "Local Statistics",
            stats_visits: "Page visits: ",
            stats_clicks: "Total clicks: ",
            stats_recent: "Recent actions:",
            stats_clear: "Clear statistics"
        }
    };

    const aboutHTML = {
        ru: `<p>Привет! Я Андрей — начинающий DevOps-инженер и сторонник self-hosting.</p>
             <p>Увлекаюсь автоматизацией, контейнеризацией и созданием надёжных инфраструктур. Этот сайт — живой пример моего подхода: просто, быстро, под полным контролем.</p>
             <p>Связь со мной: 
                <a href="https://github.com/Mr-p1gnum" target="_blank" rel="noopener">GitHub</a> · 
                <a href="https://gitlab.mrp1gnum.ru/mr-p1gnum" target="_blank" rel="noopener">GitLab</a> · 
                <a href="https://hub.docker.com/repositories/mrp1gnum" target="_blank" rel="noopener">DockerHub</a> · 
                <a href="https://t.me/mrp1gnum" target="_blank" rel="noopener">Telegram: @mrp1gnum</a>
             </p>`,
        en: `<p>Hi! I'm Andrey — a beginner DevOps engineer and self-hosting enthusiast.</p>
             <p>I love automation, containerization, and building reliable infrastructures. This site is a live example of my approach: simple, fast, fully under my control.</p>
             <p>Find me on: 
                <a href="https://github.com/Mr-p1gnum" target="_blank" rel="noopener">GitHub</a> · 
                <a href="https://gitlab.mrp1gnum.ru/mr-p1gnum" target="_blank" rel="noopener">GitLab</a> · 
                <a href="https://hub.docker.com/repositories/mrp1gnum" target="_blank" rel="noopener">DockerHub</a> · 
                <a href="https://t.me/mrp1gnum" target="_blank" rel="noopener">Telegram: @mrp1gnum</a>
             </p>`
    };

    let currentLanguage = localStorage.getItem('preferred_language');
    if (!currentLanguage || (currentLanguage !== 'ru' && currentLanguage !== 'en')) {
        currentLanguage = navigator.language.startsWith('en') ? 'en' : 'ru';
    }

    function applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key === 'about_desc') {
                el.innerHTML = aboutHTML[lang] || aboutHTML['ru'];
            } else if (translations[lang] && translations[lang][key]) {
                if (el.children.length === 0 || (el.children.length === 1 && el.firstChild?.nodeType === Node.TEXT_NODE)) {
                    el.textContent = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });
        document.getElementById('langToggle').textContent = lang === 'ru' ? 'EN' : 'RU';
        document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
        localStorage.setItem('preferred_language', lang);
    }

    document.getElementById('langToggle').addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        applyLanguage(currentLanguage);
    });

    applyLanguage(currentLanguage);

    // ---------- Текущий год ----------
    document.getElementById('year').textContent = new Date().getFullYear();

    // ---------- Плавная прокрутка ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---------- Анимация появления ----------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // ---------- Лайтбокс ----------
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeLightbox = document.getElementById('closeLightbox');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;
            const src = this.dataset.lightboxSrc;
            const captionKey = this.dataset.i18nCaption;
            if (src) {
                lightboxImg.src = src;
                lightboxCaption.textContent = translations[currentLanguage]?.[captionKey] || '';
                lightbox.classList.add('active');
            }
        });
    });

    closeLightbox.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });

    // ---------- Статистика ----------
    const STORAGE_KEY = 'mainselfsite_stats';
    let stats = { visits: 0, clicks: [], totalClicks: 0 };

    function loadStats() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                stats.visits = parsed.visits || 0;
                stats.clicks = parsed.clicks || [];
                stats.totalClicks = parsed.totalClicks || 0;
            } catch(e) { resetStats(); }
        }
    }

    function saveStats() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    }

    function resetStats() {
        stats = { visits: 0, clicks: [], totalClicks: 0 };
        saveStats();
    }

    loadStats();
    stats.visits += 1;
    saveStats();

    document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button');
        if (!target) return;
        const tag = target.tagName.toLowerCase();
        let description = '';
        if (tag === 'a') {
            description = target.textContent.trim().substring(0, 60) || target.href;
        } else if (tag === 'button') {
            description = target.textContent.trim().substring(0, 40) || 'button';
        }
        stats.clicks.push({
            time: new Date().toLocaleString(),
            element: description,
            url: target.href || ''
        });
        stats.totalClicks += 1;
        if (stats.clicks.length > 50) stats.clicks = stats.clicks.slice(-50);
        saveStats();
    });

    const modal = document.getElementById('statsModal');
    const visitsSpan = document.getElementById('visitsCount');
    const clicksTotalSpan = document.getElementById('clicksTotal');
    const recentList = document.getElementById('recentClicks');

    function showStats() {
        loadStats();
        visitsSpan.textContent = stats.visits;
        clicksTotalSpan.textContent = stats.totalClicks;
        recentList.innerHTML = '';
        if (stats.clicks.length === 0) {
            recentList.innerHTML = '<li style="color:#9d8cba;">Нет данных</li>';
        } else {
            [...stats.clicks].reverse().forEach(click => {
                const li = document.createElement('li');
                li.textContent = `${click.time} — ${click.element}`;
                recentList.appendChild(li);
            });
        }
        modal.classList.add('active');
    }

    document.getElementById('showStatsBtn').addEventListener('click', showStats);
    document.getElementById('closeStatsBtn').addEventListener('click', () => modal.classList.remove('active'));
    document.getElementById('clearStatsBtn').addEventListener('click', () => {
        if (confirm('Очистить всю локальную статистику?')) {
            resetStats();
            showStats();
        }
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    applyLanguage(currentLanguage);
})();