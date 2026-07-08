// ---------- ПЕРЕКЛЮЧЕНИЕ РАЗДЕЛОВ ----------
window.showSection = function(id) {
    document.querySelectorAll('.forum-section').forEach(function(el) {
        el.classList.remove('active');
    });
    var target = document.getElementById('section-' + id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
};

// ---------- ОБНОВЛЕНИЕ ВРЕМЕНИ ----------
function updateTime() {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    var s = String(now.getSeconds()).padStart(2, '0');
    var timeStr = h + ':' + m + ':' + s;
    var footerTime = document.getElementById('footer-time');
    if (footerTime) footerTime.textContent = timeStr;
    var dateEl = document.getElementById('header-date');
    if (dateEl) {
        var days = ['воскресенье','понедельник','вторник','среду','четверг','пятницу','субботу'];
        var d = now.getDate();
        var mName = (now.getMonth()+1);
        var y = now.getFullYear();
        var wd = days[now.getDay()];
        dateEl.textContent = 'Сегодня: ' + d + '.' + String(mName).padStart(2,'0') + '.' + y + ', ' + wd;
    }
}
updateTime();
setInterval(updateTime, 1000);

// ---------- ПЕРЕВОД ----------
let currentLang = 'ru';

const translations = {
    ru: {
        // общие
        logo: "Mr.p1gnum Forum",
        footer: "© 2026 Mr.p1gnum Forum — Все права защищены.",
        // навигация
        nav: {
            index: "🏠 Форум",
            about: "👤 О себе",
            skills: "⚙️ Навыки",
            projects: "📂 Проекты",
            blog: "📝 Блог",
            guestbook: "📖 Гостевая",
            achievements: "🏆 Достижения",
            contacts: "✉️ Контакты",
            lang: "EN"
        },
        // индекс
        index: {
            title: "📋 Список разделов",
            th_forum: "Раздел",
            th_topics: "Темы",
            th_posts: "Сообщения",
            th_last: "Последнее сообщение",
            link_about: "О себе",
            desc_about: "Моя биография и контакты",
            link_skills: "Навыки",
            desc_skills: "Технологии и инструменты",
            link_projects: "Проекты",
            desc_projects: "Мои разработки с картинками",
            link_blog: "Блог",
            desc_blog: "Заметки и мысли",
            link_guestbook: "Гостевая книга",
            desc_guestbook: "Оставьте свой след",
            link_achievements: "Достижения",
            desc_achievements: "Мои успехи и награды",
            link_contacts: "Контакты",
            desc_contacts: "Как со мной связаться",
            btn_newtopic: "Новая тема",
            btn_search: "Поиск"
        },
        // about
        about: {
            title: "👤 О себе",
            back: "⬅ Назад к разделам",
            reg: "Зарегистрирован: 01.01.2020",
            posts: "Сообщений: 42",
            topic: "<strong>Тема:</strong> Приветствие",
            content: "<p>Привет! Я Mr.p1gnum — разработчик и энтузиаст самохостинга. Люблю создавать полезные инструменты, автоматизировать рутину и экспериментировать с новыми технологиями.</p><p>В свободное время веду свой блог, участвую в open-source проектах и помогаю сообществу.</p><p><strong>Контакты:</strong> Telegram, GitHub, GitLab — везде я <strong>@mrp1gnum</strong>.</p>",
            sig: "— «Сделай сам, и будет работать»",
            comment1: "<p>Отличное знакомство! Тоже интересуюсь самохостингом. Буду следить за твоими проектами.</p>",
            comment2: "<p>Привет! Отличный подход к автоматизации. Может, обменяемся опытом по CI/CD?</p>",
            btn_reply: "Ответить",
            btn_quote: "Цитировать"
        },
        // skills
        skills: {
            title: "⚙️ Навыки",
            back: "⬅ Назад к разделам",
            reg: "Зарегистрирован: 01.01.2020",
            posts: "Сообщений: 42",
            topic: "<strong>Тема:</strong> Технологический стек",
            content: "<ul style='padding-left:20px; list-style:square;'><li><strong>Контейнеризация:</strong> Docker, docker-compose</li><li><strong>CI/CD:</strong> GitLab CI, автоматические пайплайны</li><li><strong>Self-hosting:</strong> Собственный сервер, полный контроль</li><li><strong>Безопасность:</strong> Фаерволы, HTTPS, защита от атак</li><li><strong>Администрирование Linux:</strong> Скрипты, сеть, диски</li><li><strong>VPN:</strong> WireGuard, OpenVPN</li><li><strong>Базы данных:</strong> PostgreSQL, MySQL, резервное копирование</li><li><strong>Оркестрация:</strong> Docker Swarm</li></ul>",
            sig: "— «Код — это поэзия»",
            btn_reply: "Ответить"
        },
        // projects
        projects: {
            title: "📂 Проекты",
            back: "⬅ Назад к разделам",
            p1_title: "<strong>Тема:</strong> Локальный GitLab",
            p1_desc: "Автоматические тесты через pipeline. Полный контроль над кодом.",
            p1_link: "Исходники (not modded) →",
            p2_title: "<strong>Тема:</strong> Система мониторинга",
            p2_desc: "Prometheus + Grafana, дашборды для всех сервисов. Уведомления в Telegram.",
            p2_link: "Исходники →",
            p3_title: "<strong>Тема:</strong> Этот сайт (форум)",
            p3_desc: "Автоматический деплой статики из GitLab CI на свой хост. Полностью самодостаточный.",
            p3_link: "Исходники →",
            p4_title: "<strong>Тема:</strong> Telegram-бот для мониторинга",
            p4_desc: "Alert-ы о падении сервисов, отправка логов, интерактивные команды.",
            p4_link: "Исходники →",
            p5_title: "<strong>Тема:</strong> Почтовый сервис",
            p5_desc: "Почтовый сервис для рабочей почты и будущих программ. Полный спам-фильтр.",
            p5_link: "Исходники →",
            btn_newtopic: "Новая тема"
        },
        // blog
        blog: {
            title: "📝 Блог",
            back: "⬅ Назад к разделам",
            post1_title: "<strong>Тема:</strong> Как я перешёл на самохостинг",
            post1_content: "<p>В 2020 году я решил, что хватит пользоваться облачными сервисами. Купил старый ThinkCentre, установил Debian и начал экспериментировать.</p><p>Сейчас у меня работает более 15 сервисов: Nextcloud, Gitea, Matrix, Jitsi, Grafana и многое другое. Это был лучший шаг.</p>",
            post2_title: "<strong>Тема:</strong> Настройка WireGuard за 15 минут",
            post2_content: "<p>Простая инструкция, как поднять VPN-сервер, чтобы безопасно подключаться к домашней сети из любой точки мира.</p><p>WireGuard — это быстро, просто и безопасно. Никаких сложных сертификатов.</p>",
            post3_title: "<strong>Тема:</strong> Python для автоматизации рутины",
            post3_content: "<p>Как я пишу скрипты для бэкапов, мониторинга и очистки логов. Экономлю часы каждую неделю.</p><p>Библиотеки: schedule, paramiko, requests — мой джентльменский набор.</p>",
            btn_newtopic: "Новая запись"
        },
        // guestbook
        guestbook: {
            title: "📖 Гостевая книга",
            back: "⬅ Назад к разделам",
            entry1: "<p>Привет! Наткнулся на твой форум — очень атмосферно. Удачи в развитии!</p>",
            entry2: "<p>Твои статьи по Docker очень помогли мне на работе. Спасибо!</p>",
            entry3: "<p>Подскажи, как настроить маршрутизацию между несколькими клиентами?</p>",
            entry4: "<p>Иван, нужно добавить правила iptables и указать AllowedIPs. Напиши в Telegram, я помогу.</p>",
            btn_add: "Добавить запись"
        },
        // achievements
        achievements: {
            title: "🏆 Достижения",
            back: "⬅ Назад к разделам",
            topic: "<strong>Тема:</strong> Мои успехи",
            content: "<ul style='padding-left:20px; list-style:square;'><li>🏆 <strong>2025</strong> — Выступил с докладом на конференции DevOps Meetup</li><li>🏆 <strong>2024</strong> — Создал крупнейший в рунете гайд по самохостингу (более 5000 просмотров)</li><li>🏆 <strong>2023</strong> — Внедрил CI/CD на 50+ проектах</li><li>🏆 <strong>2022</strong> — Получил сертификацию Docker Certified Associate</li><li>🏆 <strong>2021</strong> — Организовал локальный митап по Linux</li></ul>",
            btn_reply: "Ответить"
        },
        // contacts
        contacts: {
            title: "✉️ Контакты",
            back: "⬅ Назад к разделам",
            topic: "<strong>Тема:</strong> Как связаться",
            content: "<p><strong>Telegram:</strong> <a href='#'>@mrp1gnum</a></p><p><strong>GitHub:</strong> <a href='#'>github.com/mrp1gnum</a></p><p><strong>GitLab:</strong> <a href='#'>gitlab.mrp1gnum.ru</a></p><p><strong>Email:</strong> <a href='#'>mrp1gnum@example.com</a></p><p>Я всегда открыт к общению, вопросам и сотрудничеству.</p>",
            btn_send: "Написать"
        }
    },
    en: {
        logo: "Mr.p1gnum Forum",
        footer: "© 2026 Mr.p1gnum Forum — All rights reserved.",
        nav: {
            index: "🏠 Forum",
            about: "👤 About",
            skills: "⚙️ Skills",
            projects: "📂 Projects",
            blog: "📝 Blog",
            guestbook: "📖 Guestbook",
            achievements: "🏆 Achievements",
            contacts: "✉️ Contacts",
            lang: "RU"
        },
        index: {
            title: "📋 Board index",
            th_forum: "Forum",
            th_topics: "Topics",
            th_posts: "Posts",
            th_last: "Last post",
            link_about: "About",
            desc_about: "My bio and contacts",
            link_skills: "Skills",
            desc_skills: "Technologies and tools",
            link_projects: "Projects",
            desc_projects: "My developments with images",
            link_blog: "Blog",
            desc_blog: "Notes and thoughts",
            link_guestbook: "Guestbook",
            desc_guestbook: "Leave your mark",
            link_achievements: "Achievements",
            desc_achievements: "My successes and awards",
            link_contacts: "Contacts",
            desc_contacts: "How to reach me",
            btn_newtopic: "New topic",
            btn_search: "Search"
        },
        about: {
            title: "👤 About",
            back: "⬅ Back to board",
            reg: "Registered: 01.01.2020",
            posts: "Posts: 42",
            topic: "<strong>Topic:</strong> Welcome",
            content: "<p>Hi! I'm Mr.p1gnum — developer and self-hosting enthusiast. I love building useful tools, automating routine, and experimenting with new technologies.</p><p>In my free time I run a blog, contribute to open-source projects, and help the community.</p><p><strong>Contacts:</strong> Telegram, GitHub, GitLab — I'm <strong>@mrp1gnum</strong> everywhere.</p>",
            sig: "— «Do it yourself, and it will work»",
            comment1: "<p>Nice to meet you! I'm also interested in self-hosting. I'll follow your projects.</p>",
            comment2: "<p>Hi! Great approach to automation. Maybe we can exchange experience on CI/CD?</p>",
            btn_reply: "Reply",
            btn_quote: "Quote"
        },
        skills: {
            title: "⚙️ Skills",
            back: "⬅ Back to board",
            reg: "Registered: 01.01.2020",
            posts: "Posts: 42",
            topic: "<strong>Topic:</strong> Tech stack",
            content: "<ul style='padding-left:20px; list-style:square;'><li><strong>Containerization:</strong> Docker, docker-compose</li><li><strong>CI/CD:</strong> GitLab CI, automated pipelines</li><li><strong>Self-hosting:</strong> Own server, full control</li><li><strong>Security:</strong> Firewalls, HTTPS, attack protection</li><li><strong>Linux Administration:</strong> Scripts, networking, storage</li><li><strong>VPN:</strong> WireGuard, OpenVPN</li><li><strong>Databases:</strong> PostgreSQL, MySQL, backup</li><li><strong>Orchestration:</strong> Docker Swarm</li></ul>",
            sig: "— «Code is poetry»",
            btn_reply: "Reply"
        },
        projects: {
            title: "📂 Projects",
            back: "⬅ Back to board",
            p1_title: "<strong>Topic:</strong> Local GitLab",
            p1_desc: "Automated tests via pipeline. Full control over code.",
            p1_link: "Sources (not modded) →",
            p2_title: "<strong>Topic:</strong> Monitoring system",
            p2_desc: "Prometheus + Grafana, dashboards for all services. Telegram alerts.",
            p2_link: "Sources →",
            p3_title: "<strong>Topic:</strong> This site (forum)",
            p3_desc: "Automated static deploy from GitLab CI to my host. Fully self-contained.",
            p3_link: "Sources →",
            p4_title: "<strong>Topic:</strong> Telegram monitoring bot",
            p4_desc: "Alerts about service failures, logs, interactive commands.",
            p4_link: "Sources →",
            p5_title: "<strong>Topic:</strong> Mail service",
            p5_desc: "Mail service for work and future apps. Full spam filter.",
            p5_link: "Sources →",
            btn_newtopic: "New topic"
        },
        blog: {
            title: "📝 Blog",
            back: "⬅ Back to board",
            post1_title: "<strong>Topic:</strong> How I switched to self-hosting",
            post1_content: "<p>In 2020 I decided that cloud services were enough. Bought an old ThinkCentre, installed Debian and started experimenting.</p><p>Now I run more than 15 services: Nextcloud, Gitea, Matrix, Jitsi, Grafana and many more. It was the best step.</p>",
            post2_title: "<strong>Topic:</strong> Setting up WireGuard in 15 minutes",
            post2_content: "<p>A simple guide on how to set up a VPN server to securely connect to your home network from anywhere.</p><p>WireGuard is fast, simple and secure. No complex certificates.</p>",
            post3_title: "<strong>Topic:</strong> Python for routine automation",
            post3_content: "<p>How I write scripts for backups, monitoring and log cleanup. Saving hours every week.</p><p>Libraries: schedule, paramiko, requests — my standard set.</p>",
            btn_newtopic: "New post"
        },
        guestbook: {
            title: "📖 Guestbook",
            back: "⬅ Back to board",
            entry1: "<p>Hi! Stumbled upon your forum — very atmospheric. Good luck with it!</p>",
            entry2: "<p>Your Docker articles really helped me at work. Thank you!</p>",
            entry3: "<p>Can you tell me how to set up routing between multiple clients?</p>",
            entry4: "<p>Ivan, you need to add iptables rules and specify AllowedIPs. Write to me on Telegram, I'll help.</p>",
            btn_add: "Add entry"
        },
        achievements: {
            title: "🏆 Achievements",
            back: "⬅ Back to board",
            topic: "<strong>Topic:</strong> My successes",
            content: "<ul style='padding-left:20px; list-style:square;'><li>🏆 <strong>2025</strong> — Gave a talk at DevOps Meetup conference</li><li>🏆 <strong>2024</strong> — Created the largest self-hosting guide in Runet (5000+ views)</li><li>🏆 <strong>2023</strong> — Implemented CI/CD on 50+ projects</li><li>🏆 <strong>2022</strong> — Got Docker Certified Associate certification</li><li>🏆 <strong>2021</strong> — Organized a local Linux meetup</li></ul>",
            btn_reply: "Reply"
        },
        contacts: {
            title: "✉️ Contacts",
            back: "⬅ Back to board",
            topic: "<strong>Topic:</strong> How to reach me",
            content: "<p><strong>Telegram:</strong> <a href='#'>@mrp1gnum</a></p><p><strong>GitHub:</strong> <a href='#'>github.com/mrp1gnum</a></p><p><strong>GitLab:</strong> <a href='#'>gitlab.mrp1gnum.ru</a></p><p><strong>Email:</strong> <a href='#'>mrp1gnum@example.com</a></p><p>I'm always open to communication, questions and cooperation.</p>",
            btn_send: "Send"
        }
    }
};

function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Логотип
    document.getElementById('logo-text').textContent = t.logo;

    // Меню
    document.getElementById('nav-index').textContent = t.nav.index;
    document.getElementById('nav-about').textContent = t.nav.about;
    document.getElementById('nav-skills').textContent = t.nav.skills;
    document.getElementById('nav-projects').textContent = t.nav.projects;
    document.getElementById('nav-blog').textContent = t.nav.blog;
    document.getElementById('nav-guestbook').textContent = t.nav.guestbook;
    document.getElementById('nav-achievements').textContent = t.nav.achievements;
    document.getElementById('nav-contacts').textContent = t.nav.contacts;
    document.getElementById('lang-switch').textContent = t.nav.lang;

    // Индекс
    document.getElementById('index-title').textContent = t.index.title;
    document.getElementById('index-th-forum').textContent = t.index.th_forum;
    document.getElementById('index-th-topics').textContent = t.index.th_topics;
    document.getElementById('index-th-posts').textContent = t.index.th_posts;
    document.getElementById('index-th-last').textContent = t.index.th_last;
    document.getElementById('index-link-about').textContent = t.index.link_about;
    document.getElementById('index-desc-about').textContent = t.index.desc_about;
    document.getElementById('index-link-skills').textContent = t.index.link_skills;
    document.getElementById('index-desc-skills').textContent = t.index.desc_skills;
    document.getElementById('index-link-projects').textContent = t.index.link_projects;
    document.getElementById('index-desc-projects').textContent = t.index.desc_projects;
    document.getElementById('index-link-blog').textContent = t.index.link_blog;
    document.getElementById('index-desc-blog').textContent = t.index.desc_blog;
    document.getElementById('index-link-guestbook').textContent = t.index.link_guestbook;
    document.getElementById('index-desc-guestbook').textContent = t.index.desc_guestbook;
    document.getElementById('index-link-achievements').textContent = t.index.link_achievements;
    document.getElementById('index-desc-achievements').textContent = t.index.desc_achievements;
    document.getElementById('index-link-contacts').textContent = t.index.link_contacts;
    document.getElementById('index-desc-contacts').textContent = t.index.desc_contacts;
    document.getElementById('index-btn-newtopic').textContent = t.index.btn_newtopic;
    document.getElementById('index-btn-search').textContent = t.index.btn_search;

    // About
    document.getElementById('about-title').textContent = t.about.title;
    document.getElementById('about-back').textContent = t.about.back;
    document.getElementById('about-reg').textContent = t.about.reg;
    document.getElementById('about-posts').textContent = t.about.posts;
    document.getElementById('about-topic-title').innerHTML = t.about.topic;
    document.getElementById('about-content').innerHTML = t.about.content;
    document.getElementById('about-sig').textContent = t.about.sig;
    document.getElementById('about-comment1').innerHTML = t.about.comment1;
    document.getElementById('about-comment2').innerHTML = t.about.comment2;
    document.getElementById('about-btn-reply').textContent = t.about.btn_reply;
    document.getElementById('about-btn-quote').textContent = t.about.btn_quote;

    // Skills
    document.getElementById('skills-title').textContent = t.skills.title;
    document.getElementById('skills-back').textContent = t.skills.back;
    document.getElementById('skills-reg').textContent = t.skills.reg;
    document.getElementById('skills-posts').textContent = t.skills.posts;
    document.getElementById('skills-topic-title').innerHTML = t.skills.topic;
    document.getElementById('skills-content').innerHTML = t.skills.content;
    document.getElementById('skills-sig').textContent = t.skills.sig;
    document.getElementById('skills-btn-reply').textContent = t.skills.btn_reply;

    // Projects
    document.getElementById('projects-title').textContent = t.projects.title;
    document.getElementById('projects-back').textContent = t.projects.back;
    document.getElementById('project1-title').innerHTML = t.projects.p1_title;
    document.getElementById('project1-desc').textContent = t.projects.p1_desc;
    document.getElementById('project1-link').textContent = t.projects.p1_link;
    document.getElementById('project2-title').innerHTML = t.projects.p2_title;
    document.getElementById('project2-desc').textContent = t.projects.p2_desc;
    document.getElementById('project2-link').textContent = t.projects.p2_link;
    document.getElementById('project3-title').innerHTML = t.projects.p3_title;
    document.getElementById('project3-desc').textContent = t.projects.p3_desc;
    document.getElementById('project3-link').textContent = t.projects.p3_link;
    document.getElementById('project4-title').innerHTML = t.projects.p4_title;
    document.getElementById('project4-desc').textContent = t.projects.p4_desc;
    document.getElementById('project4-link').textContent = t.projects.p4_link;
    document.getElementById('project5-title').innerHTML = t.projects.p5_title;
    document.getElementById('project5-desc').textContent = t.projects.p5_desc;
    document.getElementById('project5-link').textContent = t.projects.p5_link;
    document.getElementById('projects-btn-newtopic').textContent = t.projects.btn_newtopic;

    // Blog
    document.getElementById('blog-title').textContent = t.blog.title;
    document.getElementById('blog-back').textContent = t.blog.back;
    document.getElementById('blog-post1-title').innerHTML = t.blog.post1_title;
    document.getElementById('blog-post1-content').innerHTML = t.blog.post1_content;
    document.getElementById('blog-post2-title').innerHTML = t.blog.post2_title;
    document.getElementById('blog-post2-content').innerHTML = t.blog.post2_content;
    document.getElementById('blog-post3-title').innerHTML = t.blog.post3_title;
    document.getElementById('blog-post3-content').innerHTML = t.blog.post3_content;
    document.getElementById('blog-btn-newtopic').textContent = t.blog.btn_newtopic;

    // Guestbook
    document.getElementById('guestbook-title').textContent = t.guestbook.title;
    document.getElementById('guestbook-back').textContent = t.guestbook.back;
    document.getElementById('guestbook-entry1').innerHTML = t.guestbook.entry1;
    document.getElementById('guestbook-entry2').innerHTML = t.guestbook.entry2;
    document.getElementById('guestbook-entry3').innerHTML = t.guestbook.entry3;
    document.getElementById('guestbook-entry4').innerHTML = t.guestbook.entry4;
    document.getElementById('guestbook-btn-add').textContent = t.guestbook.btn_add;

    // Achievements
    document.getElementById('achievements-title').textContent = t.achievements.title;
    document.getElementById('achievements-back').textContent = t.achievements.back;
    document.getElementById('achievements-topic-title').innerHTML = t.achievements.topic;
    document.getElementById('achievements-content').innerHTML = t.achievements.content;
    document.getElementById('achievements-btn-reply').textContent = t.achievements.btn_reply;

    // Contacts
    document.getElementById('contacts-title').textContent = t.contacts.title;
    document.getElementById('contacts-back').textContent = t.contacts.back;
    document.getElementById('contacts-topic-title').innerHTML = t.contacts.topic;
    document.getElementById('contacts-content').innerHTML = t.contacts.content;
    document.getElementById('contacts-btn-send').textContent = t.contacts.btn_send;

    // Footer
    document.getElementById('footer-copy').textContent = t.footer;
}

// Переключение языка по клику
document.getElementById('lang-switch').addEventListener('click', function(e) {
    e.preventDefault();
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    switchLanguage(newLang);
});

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
// Показываем индекс по умолчанию
showSection('index');