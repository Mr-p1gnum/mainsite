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
            feature6_title: "VPN сервер",
            feature6_desc: "Поднятие и настройка VPN (WireGuard/OpenVPN) для защищённого доступа к внутренним ресурсам.",
            feature7_title: "Базы данных",
            feature7_desc: "Развёртывание и администрирование PostgreSQL, MySQL, резервное копирование.",
            feature8_title: "Оркестрация контейнеров",
            feature8_desc: "Docker Swarm для управления кластерами и масштабирования сервисов.",
            projects_title: "Мои проекты",
            project1_title: "Локальный GitLab",
            project1_desc: "Автоматические тесты через pipeline.",
            project1_link: "Исходники (not modded) →",
            project2_title: "Система мониторинга",
            project2_desc: "Prometheus + Grafana, дашборды для всех сервисов.",
            project2_link: "Исходники →",
            project3_title: "Вот этот сайт",
            project3_desc: "Автоматический деплой статики из GitLab CI на свой хост.",
            project3_link: "Исходники →",
            project4_title: "Telegram-бот",
            project4_desc: "Alert-ы для мониторинга сетевой доступности серверов.",
            project4_link: "Исходники →",
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
            feature6_title: "VPN Server",
            feature6_desc: "Setting up VPN (WireGuard/OpenVPN) for secure access to internal resources.",
            feature7_title: "Databases",
            feature7_desc: "Deployment and administration of PostgreSQL, MySQL, backup management.",
            feature8_title: "Container Orchestration",
            feature8_desc: "Docker Swarm for cluster management and service scaling.",
            projects_title: "My projects",
            project1_title: "Local GitLab",
            project1_desc: "Automated tests through the pipeline.",
            project1_link: "Source (not modded) →",
            project2_title: "Monitoring System",
            project2_desc: "Prometheus + Grafana dashboards for all services.",
            project2_link: "Source →",
            project3_title: "This website",
            project3_desc: "Automatic static site deployment from GitLab CI to my own host.",
            project3_link: "Source →",
            project4_title: "Telegram-bot",
            project4_desc: "Alerts for monitoring network availability of servers.",
            project4_link: "Source →",
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
                <a href="https://hub.docker.com/u/mrp1gnum" target="_blank" rel="noopener">DockerHub</a> · 
                <a href="https://t.me/mrp1gnum" target="_blank" rel="noopener">Telegram: @mrp1gnum</a> ·
                <span class="copy-email" data-email="andruyha5000@gmail.com">✉ скопировать почту</span>
             </p>`,
        en: `<p>Hi! I'm Andrey — a beginner DevOps engineer and self-hosting enthusiast.</p>
             <p>I love automation, containerization, and building reliable infrastructures. This site is a live example of my approach: simple, fast, fully under my control.</p>
             <p>Find me on: 
                <a href="https://github.com/Mr-p1gnum" target="_blank" rel="noopener">GitHub</a> · 
                <a href="https://hub.docker.com/u/mrp1gnum" target="_blank" rel="noopener">DockerHub</a> · 
                <a href="https://t.me/mrp1gnum" target="_blank" rel="noopener">Telegram: @mrp1gnum</a> ·
                <span class="copy-email" data-email="andruyha5000@gmail.com">✉ copy email</span>
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

// ---------- Скрытие шапки на мобильных при скролле ----------
(function() {
    const header = document.querySelector('header');
    if (!header) return;
    let lastScroll = 0;
    const mobileBreakpoint = 768;

    window.addEventListener('scroll', function() {
        if (window.innerWidth > mobileBreakpoint) return;
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
            lastScroll = currentScroll;
            return;
        }
        if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
            header.classList.add('header-hidden');
        } else if (currentScroll < lastScroll) {
            header.classList.remove('header-hidden');
        }
        lastScroll = currentScroll;
    });

document.addEventListener('click', function(e) {
    const target = e.target.closest('copy-email');
    if (!target) return;

    const email = target.getAttribute('data-email');
    if (!email) return;

    // Современный Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
            .then(() => {
                const originalText = target.textContent;
                target.textContent = '✅ Скопировано!';
                setTimeout(() => {
                    target.textContent = originalText;
                }, 2000);
            })
            .catch(() => {
                alert('Не удалось скопировать. Попробуйте вручную.');
            });
    } else {
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('Скопировано в буфер!');
        } catch {
            alert('Не удалось скопировать. Попробуйте вручную.');
        }
        document.body.removeChild(textArea);
    }
});

})();