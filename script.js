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
        copied: "✅ Скопировано!",
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
        copied: "✅ Copied!",
    }
};

const aboutHTML = {
    ru: `<p>Привет! Я Андрей — начинающий DevOps-инженер и сторонник self-hosting.</p>
         <p>Увлекаюсь автоматизацией, контейнеризацией и созданием надёжных инфраструктур. Этот сайт — живой пример моего подхода: просто, быстро, под полным контролем.</p>
         <p>Связь со мной: 
            <a href="https://github.com/Mr-p1gnum" target="_blank" rel="noopener">GitHub</a> · 
            <a href="https://hub.docker.com/u/mrp1gnum" target="_blank" rel="noopener">DockerHub</a> · 
            <a href="https://t.me/mrp1gnum" target="_blank" rel="noopener">Telegram</a> ·
            <span class="copy-email" data-email="mr-p1gnum@mrp1gnum.ru">Почта</span>
         </p>`,
    en: `<p>Hi! I'm Andrey — a beginner DevOps engineer and self-hosting enthusiast.</p>
         <p>I love automation, containerization, and building reliable infrastructures. This site is a live example of my approach: simple, fast, fully under my control.</p>
         <p>Find me on: 
            <a href="https://github.com/Mr-p1gnum" target="_blank" rel="noopener">GitHub</a> · 
            <a href="https://hub.docker.com/u/mrp1gnum" target="_blank" rel="noopener">DockerHub</a> · 
            <a href="https://t.me/mrp1gnum" target="_blank" rel="noopener">Telegram</a> ·
            <span class="copy-email" data-email="mr-p1gnum@mrp1gnum.ru">Mail</span>
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
})();

// ---------- КОПИРОВАНИЕ ПОЧТЫ (многоязычное) ----------
document.addEventListener('click', function(e) {
    const target = e.target.closest('.copy-email');
    if (!target) return;

    const email = target.getAttribute('data-email');
    if (!email) return;

    e.preventDefault();
    e.stopPropagation();

    const originalText = target.textContent;
    // Определяем сообщение об успехе в зависимости от текущего языка
    const successMsg = translations[currentLanguage]?.copied || '✅ Скопировано!';

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
            .then(() => {
                target.textContent = successMsg;
                setTimeout(() => {
                    target.textContent = originalText;
                }, 2000);
            })
            .catch(() => {
                fallbackCopy(email, target, originalText, successMsg);
            });
    } else {
        fallbackCopy(email, target, originalText, successMsg);
    }
});

function fallbackCopy(text, element, originalText, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        element.textContent = successMsg;
        setTimeout(() => {
            element.textContent = originalText;
        }, 2000);
    } catch {
        alert('Не удалось скопировать. Попробуйте вручную.');
    }
    document.body.removeChild(textArea);
}