document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const languageSwitcher = document.getElementById('language-switcher');
    const body = document.body;
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const transitionOverlay = document.getElementById('page-transition-overlay');
    let isTransitioning = false;

    const translations = {
        ru: {
            page_title: "Атаев Кемал - Портфолио",
            nav_home: "Главная",
            nav_services: "Услуги",
            nav_resume: "Резюме",
            nav_work: "Работы",
            nav_contact: "Контакты",
            hire_me_btn: "Нанять меня",
            home_subtitle: "Full Stack Web & App Developer",
            home_title_part1: "Привет, я Kemal",
            home_title_part2: "Атаев Кемал",
            home_description: "Я преуспеваю в создании элегантных цифровых решений и владею различными языками программирования и технологиями.",
            download_cv_btn: "СКАЧАТЬ CV",
            stats_years_experience: "Лет опыта",
            stats_projects_completed: "Завершенных проектов",
            stats_technologies_mastered: "Освоенных технологий",
            stats_code_commits: "Код-коммитов",
            my_skills_title: "Мои Услуги",
            service_frontend_dev_title: "Frontend Developer",
            service_frontend_dev_description: "Я самостоятельно изучил фронтенд-разработку и всегда готов учиться новому для создания современных интерфейсов.",
            service_backend_dev_title: "Backend Developer",
            service_backend_dev_description: "Начал изучение бэкенда с помощью наставника, а затем углубил свои знания самостоятельно, создавая надежные решения.",
            service_app_dev_title: "App Developer",
            service_app_dev_description: "Основы разработки освоил с небольшой помощью, после чего продолжил развиваться сам, стремясь создавать качественные приложения.",
            resume_why_hire_me_title: "Почему меня нанять?",
            resume_why_hire_me_description: "Подробная информация о моем опыте, образовании, навыках и личных качествах.",
            resume_tab_experience: "Опыт",
            resume_tab_education: "Образование",
            resume_tab_skills: "Навыки",
            resume_tab_about_me: "Обо мне",
            resume_experience_title: "Мой опыт",
            resume_experience_description: "Здесь вы найдете хронологию моей профессиональной деятельности.",
            exp_frontend_dev_title: "Frontend Developer",
            exp_frontend_dev_company: "Самообучение / Проекты",
            exp_backend_dev_title: "Backend Developer",
            exp_backend_dev_company: "Самообучение / Частные уроки / Проекты ",
            exp_fullstack_dev_title: "App Developer",
            exp_fullstack_dev_company: "Самообучение / Частные уроки / Проекты",
            edu_title: "Мое Образование",
            edu_description: "Мой путь обучения и ключевые области знаний.",
            skills_title: "Мои Навыки",
            skills_description: "Мои основные технические навыки и инструменты, которые я использую в работе.",
            skills_frontend: "Frontend Разработка",
            skills_backend: "Backend и Базы Данных",
            skills_mobile: "Разработка Мобильных Приложений",
            skills_tools: "Инструменты и Среда",
            about_me_title: "Обо Мне",
            about_me_description: "Подробная информация обо мне и моих личных данных.",
            about_name_label: "Имя:",
            about_phone_label: "Телефон:",
            about_phone_value: "+99364005374",
            about_experience_label: "Опыт:",
            about_experience_value: "1+ Год",
            about_skype_label: "Whatsapp:",
            about_nationality_label: "Национальность:",
            about_nationality_value: "Туркмен",
            about_email_label: "Email:",
            about_freelance_label: "Фриланс:",
            about_freelance_value_unavailable: "Недоступен",
            about_languages_label: "Языки:",
            about_languages_value: "Русский, Английский, Туркменский",
            work_title: "Мои Работы",
            proj1_title: "Aura Computers",
            proj1_description: "Aura Computers — это современный адаптивный веб-сайт с полной административной панелью для удобного управления контентом, товарами и услугами. Он обеспечивает чистый и удобный интерфейс, безопасную аутентификацию, высокую скорость работы и структуру, созданную с учётом лучших практик SEO для будущего развития",
            proj1_tech: "PHP, Laravel, Javascript, Bootstrap, Blade, MySql/SQL, AJAX, Jquery, Chart.js, API, Postman",
            proj2_title: "Aura Computers Моб.приложение",
            proj2_description: "Aura Computers Моб приложение — это кроссплатформенное приложение, созданное для удобного доступа к товарам и услугам в любом месте. Оно имеет чистый и адаптивный интерфейс с интуитивной навигацией, безопасной аутентификацией и стабильной производительностью. Приложение разработано с учётом масштабируемости и готово к будущим обновлениям и развитию бизнеса.",
            proj2_tech: "Flutter, Dart",
            proj3_title: "Sonus Music",
            proj3_description: "Веб-приложение для управления задачами с возможностью добавления, редактирования и удаления задач, а также установки приоритетов и сроков выполнения.",
            proj3_tech: "PHP, Laravel, Javascript, Bootstrap, Blade, MySql/SQL, AJAX, Jquery, Api",
            proj4_title: "Sonus Моб.приложение",
            proj4_description: "Прототип платформы для интернет-магазина с каталогом товаров, корзиной покупок и базовой системой управления заказами.",
            proj4_tech: "Flutter, Dart",
            contact_title: "Давайте работать вместе",
            form_firstname_placeholder: "Имя",
            form_lastname_placeholder: "Фамилия",
            form_email_placeholder: "Email адрес",
            form_phone_placeholder: "Номер телефона",
            form_select_service: "Выберите услугу",
            form_message_placeholder: "Напишите ваше сообщение здесь.",
            form_send_message_btn: "Отправить сообщение",
            contact_phone_label: "Телефон:",
            contact_phone_value: "+99364005374",
            contact_email_label: "Email:",
            contact_email_value: "kemalatayew913@gmail.com",
            contact_address_label: "Адрес:",
            contact_address_value: "Ашхабад, Туркменистан",
            contact_telegram_label: "Telegram:",
            contact_teams_label: "Whatsapp:"
        },
        en: {
            page_title: "Atayew Kemal - Portfolio",
            nav_home: "Home",
            nav_services: "Services",
            nav_resume: "Resume",
            nav_work: "Work",
            nav_contact: "Contact",
            hire_me_btn: "Hire me",
            home_subtitle: "Full Stack Web & App Developer",
            home_title_part1: "Hello I'm Kemal",
            home_title_part2: "Atayew Kemal",
            home_description: "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
            download_cv_btn: "DOWNLOAD CV",
            stats_years_experience: "Years of experience",
            stats_projects_completed: "Projects completed",
            stats_technologies_mastered: "Technologies mastered",
            stats_code_commits: "Code commits",
            my_skills_title: "My Services",
            service_frontend_dev_title: "Frontend Developer",
            service_frontend_dev_description: "I learned frontend development on my own and I'm always ready to learn new things to create modern interfaces.",
            service_backend_dev_title: "Backend Developer",
            service_backend_dev_description: "I started learning backend with the help of a mentor and then deepened my knowledge independently, creating reliable solutions.",
            service_app_dev_title: "App Developer",
            service_app_dev_description: "I mastered the basics of development with a little help, after which I continued to grow on my own, striving to create high-quality applications.",
            resume_why_hire_me_title: "Why hire me?",
            resume_why_hire_me_description: "Detailed information about my experience, education, skills, and personal attributes.",
            resume_tab_experience: "Experience",
            resume_tab_education: "Education",
            resume_tab_skills: "Skills",
            resume_tab_about_me: "About me",
            resume_experience_title: "My Experience",
            resume_experience_description: "Here you will find a chronological overview of my professional journey.",
            exp_frontend_dev_title: "Frontend Developer",
            exp_frontend_dev_company: "Self-study / Projects",
            exp_backend_dev_title: "Backend Developer",
            exp_backend_dev_company: "Self-study / Private Lessons / Projects",
            exp_fullstack_dev_title: "App Developer",
            exp_fullstack_dev_company: "Self-study / Private Lessons / Projects",
            edu_title: "My Education",
            edu_description: "My learning journey and key areas of knowledge.",
            skills_title: "My Skills",
            skills_description: "My core technical skills and tools I utilize in my work.",
            skills_frontend: "Frontend Development",
            skills_backend: "Backend & Databases",
            skills_mobile: "Mobile App Development",
            skills_tools: "Tools & Environment",
            about_me_title: "About Me",
            about_me_description: "Detailed information about me and my personal data.",
            about_name_label: "Name:",
            about_phone_label: "Phone:",
            about_phone_value: "+99364005374",
            about_experience_label: "Experience:",
            about_experience_value: "1+ Years",
            about_skype_label: "Whatsapp:",
            about_nationality_label: "Nationality:",
            about_nationality_value: "Turkmen",
            about_email_label: "Email:",
            about_freelance_label: "Freelance:",
            about_freelance_value_unavailable: "Not Available",
            about_languages_label: "Languages:",
            about_languages_value: "Russian, English, Turkmen",
            work_title: "My Work",
            proj1_title: "Aura Computers",
            proj1_description: "Aura-Computers is a modern, responsive website featuring a full administration panel for effortless content, product, and service management. It delivers a clean user experience with secure authentication, fast performance, and a structure built with SEO best practices in mind to support future growth.",
            proj1_tech: "PHP, Laravel, Javascript, Bootstrap, Blade, MySql/SQL, AJAX, Jquery, Chart.js, API, Postman",
            proj2_title: "Aura Computers App",
            proj2_description: "Aura-Computers Mobile App is a cross-platform application designed for seamless access to products and services on the go. It features a clean, responsive interface with intuitive navigation, secure authentication, and smooth performance. The app is built with scalability in mind, making it ready for future updates and business growth.",
            proj2_tech: "Flutter, Dart",
            proj3_title: "Sonus Music",
            proj3_description: "A web application for task management with features to add, edit, and delete tasks, as well as set priorities and deadlines.",
            proj3_tech: "PHP, Laravel, Javascript, Bootstrap, Blade, MySql/SQL, AJAX, Jquery, Api",
            proj4_title: "Sonus Music App",
            proj4_description: "A prototype of an e-commerce platform featuring a product catalog, shopping cart, and a basic order management system.",
            proj4_tech: "Flutter, Dart",
            contact_title: "Let's work together",
            form_firstname_placeholder: "Firstname",
            form_lastname_placeholder: "Lastname",
            form_email_placeholder: "Email address",
            form_phone_placeholder: "Phone number",
            form_select_service: "Select Service",
            form_message_placeholder: "Type your message here.",
            form_send_message_btn: "Send message",
            contact_phone_label: "Phone:",
            contact_phone_value: "+99364005374",
            contact_email_label: "Email:",
            contact_email_value: "kemalatayew913@gmail.com",
            contact_address_label: "Address:",
            contact_address_value: "Ashgabat, Turkmenistan",
            contact_telegram_label: "Telegram:",
            contact_teams_label: "Whatsapp:"
        },
        tk: {
            page_title: "Ataýew Kemal - Portfolio",
            nav_home: "Baş sahypa",
            nav_services: "Hyzmatlar",
            nav_resume: "Rezüme",
            nav_work: "Işlerim",
            nav_contact: "Habarlaşmak",
            hire_me_btn: "Işe al",
            home_subtitle: "Full Stack Web & App Programmist",
            home_title_part1: "Salam, men Kemal",
            home_title_part2: "Ataýew Kemal",
            home_description: "Men ajaýyp sanly tejribeleri döretmekde üstünlik gazanýaryn we dürli programmirleme dillerine we tehnologiýalaryna ökde.",
            download_cv_btn: "CV ÝÜKLÄP AL",
            stats_years_experience: "Ýyl tejribe",
            stats_projects_completed: "Tamamlanan taslamalar",
            stats_technologies_mastered: "Özleşdirilen tehnologiýalar",
            stats_code_commits: "Kod kommitleri",
            my_skills_title: "Meniň Hyzmatlarym",
            service_frontend_dev_title: "Frontend Programmist",
            service_frontend_dev_description: "Frontend programmirlemäni özbaşdak öwrendim we häzirki zaman interfeýslerini döretmek üçin hemişe täze zatlary öwrenmäge taýyn.",
            service_backend_dev_title: "Backend Programmist",
            service_backend_dev_description: "Backend-i halypanyň kömegi bilen öwrenip başladym, soňra ygtybarly çözgütleri döredip, bilimimi özbaşdak çuňlaşdyrdym.",
            service_app_dev_title: "App Programmist",
            service_app_dev_description: "Programma düzmegiň esaslaryny azajyk kömek bilen özleşdirdim, şondan soň ýokary hilli programmalar döretmäge ymtylyp, özbaşdak ösmegi dowam etdirdim.",
            resume_why_hire_me_title: "Näme üçin meni işe almaly?",
            resume_why_hire_me_description: "Meniň tejribäm, bilimim, başarnyklarym we şahsy aýratynlyklarym barada jikme-jik maglumat.",
            resume_tab_experience: "Tejribe",
            resume_tab_education: "Bilim",
            resume_tab_skills: "Başarnyklar",
            resume_tab_about_me: "Men barada",
            resume_experience_title: "Meniň Tejribäm",
            resume_experience_description: "Bu ýerde meniň professional işimiň hronologiýasyny taparsyňyz.",
            exp_frontend_dev_title: "Frontend Programmist",
            exp_frontend_dev_company: "Özbaşdak öwrenme / Taslamalar",
            exp_backend_dev_title: "Backend Programmist",
            exp_backend_dev_company: "Özbaşdak öwrenme / Hususy sapaklar / Taslamalar",
            exp_fullstack_dev_title: "App Programmist",
            exp_fullstack_dev_company: "Özbaşdak öwrenme / Hususy sapaklar / Taslamalar",
            edu_title: "Meniň Bilimim",
            edu_description: "Meniň okuw ýolum we esasy bilim ugurlarym.",
            skills_title: "Meniň Başarnyklarym",
            skills_description: "Meniň esasy tehniki başarnyklarym we işde ulanýan gurallarym.",
            skills_frontend: "Frontend Işläp Düzmek",
            skills_backend: "Backend we Maglumat Bazalary",
            skills_mobile: "Mobil Programmalary Işläp Düzmek",
            skills_tools: "Gural we Gurşaw",
            about_me_title: "Men Barada",
            about_me_description: "Men we şahsy maglumatlarym barada jikme-jik maglumat.",
            about_name_label: "Ady:",
            about_phone_label: "Telefon:",
            about_phone_value: "+99364005374",
            about_experience_label: "Tejribe:",
            about_experience_value: "1+ Ýyl",
            about_skype_label: "Whatsapp:",
            about_nationality_label: "Milleti:",
            about_nationality_value: "Türkmen",
            about_email_label: "Email:",
            about_freelance_label: "Frilans:",
            about_freelance_value_unavailable: "Elýeterli däl",
            about_languages_label: "Diller:",
            about_languages_value: "Rus, Iňlis, Türkmen",
            work_title: "Meniň Işlerim",
            proj1_title: "Aura Computers",
            proj1_description: "Aura Computers — häzirki zaman, ähli enjamlar üçin amatly görünýän web-saýt bolup, mazmuny, harytlary we hyzmatlary dolandyrmak üçin doly administratiw panel bilen üpjün edilendir. Ol arassa we peýdalanyjy üçin amatly interfeýs, ygtybarly awtentifikasiýa, ýokary tizlikde işlemek mümkinçiliklerini berýär we geljekki ösüşi üpjün etmek üçin SEO-nyň iň gowy tejribeleri esasynda gurlan gurluşa eýedir.",
            proj1_tech: "PHP, Laravel, Javascript, Bootstrap, Blade, MySql/SQL, AJAX, Jquery, Chart.js, API, Postman",
            proj2_title: "Aura Computers App",
            proj2_description: "Aura Computers Mobile App — harytlara we hyzmatlara islendik ýerde aňsat girmäge mümkinçilik berýän köp platformaly programma. Ol arassa we uýgunlaşýan interfeýs, düşnükli navigasiýa, ygtybarly giriş ulgamy we durnukly iş öndürijiligi bilen enjamlaşdyrylandyr. Programma geljekde giňeldilmeler we işewürligi ösdürmek üçin giňeldilip bilner ýaly gurlandyr.",
            proj2_tech: "Flutter, Dart",
            proj3_title: "Sonus Music",
            proj3_description: "Ýumuşlary goşmak, redaktirlemek we aýyrmak, şeýle hem ileri tutulýan ugurlary we möhletleri bellemek mümkinçiligi bolan ýumuşlary dolandyrmak üçin web programma.",
            proj3_tech: "PHP, Laravel, Javascript, Bootstrap, Blade, MySql/SQL, AJAX, Jquery, Api",
            proj4_title: "Sonus Music App",
            proj4_description: "Harytlar katalogyny, söwda sebedini we sargytlary dolandyrmagyň başlangyç ulgamyny öz içine alýan e-söwda platformasynyň prototipi.",
            proj4_tech: "Flutter, Dart",
            contact_title: "Geliň, bile işleşeliň",
            form_firstname_placeholder: "Adyňyz",
            form_lastname_placeholder: "Familiýaňyz",
            form_email_placeholder: "Email salgyňyz",
            form_phone_placeholder: "Telefon belgiňiz",
            form_select_service: "Hyzmaty saýlaň",
            form_message_placeholder: "Habaryňyzy şu ýere ýazyň.",
            form_send_message_btn: "Habar iber",
            contact_phone_label: "Telefon:",
            contact_phone_value: "+99364005374",
            contact_email_label: "Email:",
            contact_email_value: "kemalatayew913@gmail.com",
            contact_address_label: "Salgy:",
            contact_address_value: "Aşgabat, Türkmenistan",
            contact_telegram_label: "Telegram:",
            contact_teams_label: "Whatsapp:"
        }
    };

    // Cursor Logic
    window.addEventListener('mousemove', e => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, .slider, .service-card, .skill-item, .resume-tab-btn, .info-block, .language-option, .selected-language, .tech-badge, summary');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorDot.style.transform = 'scale(0.7)';
            cursorOutline.style.transform = 'scale(1.5)';
            cursorOutline.style.borderColor = 'var(--text-color)';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = '';
            cursorOutline.style.transform = '';
            cursorOutline.style.borderColor = 'var(--highlight-color)';
        });
    });

    // Language Switcher Logic
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n-key]').forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                const text = translations[lang][key];
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    // Для <summary> нужно обработать текст отдельно от иконки
                    if (element.tagName === 'SUMMARY') {
                        const icon = element.querySelector('i');
                        element.textContent = text;
                        if(icon) element.prepend(icon);
                    } else {
                        element.innerHTML = text;
                    }
                }
            }
        });

        const projectSelector = document.getElementById('project-selector');
        if (projectSelector) {
            projectSelector.querySelectorAll('li').forEach((item, index) => {
                const project = projectsData[index];
                if (project) {
                    item.textContent = translations[lang][project.title_key] || project.title_key;
                }
            });
        }

        document.title = translations[lang]['page_title'];
        localStorage.setItem('portfolioLanguage', lang);

        const selectedLangText = document.getElementById('selected-lang-text');
        if (lang === 'ru') {
            selectedLangText.textContent = 'Русский';
        } else if (lang === 'en') {
            selectedLangText.textContent = 'English';
        } else if (lang === 'tk') {
            selectedLangText.textContent = 'Türkmen';
        }
    };

    const customLangSelector = document.querySelector('.custom-language-selector');
    if (customLangSelector) {
        const selectedLanguage = customLangSelector.querySelector('.selected-language');
        const languageOptions = customLangSelector.querySelector('.language-options');

        selectedLanguage.addEventListener('click', () => customLangSelector.classList.toggle('open'));

        languageOptions.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-option')) {
                const newLang = e.target.getAttribute('data-value');
                languageSwitcher.value = newLang;
                setLanguage(newLang);
                customLangSelector.classList.remove('open');
                const activeTabId = document.querySelector('.resume-tab-btn.active')?.getAttribute('data-tab');
                if (activeTabId) updateResumeContent(activeTabId);

                if (typeof currentProjectIndex !== 'undefined') {
                    showProject(currentProjectIndex, false);
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!customLangSelector.contains(e.target)) {
                customLangSelector.classList.remove('open');
            }
        });
    }

    const savedLanguage = localStorage.getItem('portfolioLanguage') || 'ru';
    languageSwitcher.value = savedLanguage;


    // Number Animation
    const animateNumbers = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        stat.textContent = '0';
                        let current = 0;
                        const increment = target / 100;

                        const updateCount = () => {
                            if (current < target) {
                                current += increment;
                                stat.textContent = Math.ceil(current);
                                requestAnimationFrame(updateCount);
                            } else {
                                stat.textContent = target;
                            }
                        };
                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) observer.observe(statsSection);
    };
    animateNumbers();

    // === ОБНОВЛЕННАЯ ЛОГИКА ПЕРЕКЛЮЧЕНИЯ СТРАНИЦ ===
    const switchPage = (targetId) => {
        if (isTransitioning) return;

        const currentPage = document.querySelector('.page-section.active');
        const targetPage = document.getElementById(targetId);

        if (!targetPage || (currentPage && currentPage.id === targetId)) return;

        isTransitioning = true;

        const statsSection = document.querySelector('.stats-section');
        const contentWrapper = document.getElementById('content-wrapper');

        if (targetId === 'work') {
            statsSection.style.opacity = '0';
            statsSection.style.pointerEvents = 'none';
            contentWrapper.style.paddingBottom = '30px';
        } else {
            statsSection.style.opacity = '1';
            statsSection.style.pointerEvents = 'auto';
            contentWrapper.style.paddingBottom = '90px';
        }

        transitionOverlay.classList.add('active');

        setTimeout(() => {
            if (currentPage) currentPage.classList.remove('active');
            targetPage.classList.add('active');
            window.scrollTo(0, 0);

            transitionOverlay.classList.remove('active');

            setTimeout(() => {
                isTransitioning = false;
            }, 400);

        }, 400);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            switchPage(targetId);
            navLinks.forEach(nav => nav.classList.remove('active-link'));
            e.currentTarget.classList.add('active-link');
        });
    });

    const initialPageId = window.location.hash ? window.location.hash.substring(1) : 'home';
    const initialPage = document.getElementById(initialPageId) || document.getElementById('home');
    if (initialPage) initialPage.classList.add('active');

    const initialNavLink = document.querySelector(`.nav a[href="#${initialPageId}"]`) || document.querySelector('.nav a[href="#home"]');
    if (initialNavLink) initialNavLink.classList.add('active-link');

    // Theme Toggle Logic
    themeToggleCheckbox.addEventListener('change', () => {
        body.classList.toggle('light-theme');
        localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggleCheckbox.checked = true;
    }

    // Resume Tabs Logic
    const resumeTabButtons = document.querySelectorAll('.resume-tab-btn');
    const resumeDetailsTitle = document.querySelector('.resume-details .details-title');
    const resumeDetailsDescription = document.querySelector('.resume-details .details-description');
    const resumeContentData = {
        experience: { title: 'resume_experience_title', desc: 'resume_experience_description' },
        education: { title: 'edu_title', desc: 'edu_description' },
        skills: { title: 'skills_title', desc: 'skills_description' },
        about: { title: 'about_me_title', desc: 'about_me_description' }
    };

    function updateResumeContent(tabId) {
        const currentLang = localStorage.getItem('portfolioLanguage') || 'ru';
        const contentKeys = resumeContentData[tabId];

        if (contentKeys && translations[currentLang] && resumeDetailsTitle && resumeDetailsDescription) {
            resumeDetailsTitle.textContent = translations[currentLang][contentKeys.title] || '';
            resumeDetailsDescription.textContent = translations[currentLang][contentKeys.desc] || '';
        }

        document.querySelectorAll('.resume-details .tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(`${tabId}-content`)?.classList.add('active');

        resumeTabButtons.forEach(b => b.classList.remove('active'));
        document.querySelector(`.resume-tab-btn[data-tab="${tabId}"]`)?.classList.add('active');
    }

    resumeTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            updateResumeContent(tabId);
        });
    });

    if (document.querySelector('.resume-tab-btn.active')) {
        updateResumeContent(document.querySelector('.resume-tab-btn.active').dataset.tab);
    }

    // ================== НОВАЯ ЛОГИКА СЕКЦИИ РАБОТЫ ==================
    const projectsData = [
        {
            number: "01",
            title_key: "proj1_title",
            description_key: "proj1_description",
            tech_key: "PHP, Laravel, Javascript, MySql/SQL, AJAX, JQuery, Blade, Bootstrap/Icons Chart.js, Postman, Brevo",
            live_url: "https://aura-computers.com",
            github_url: "https://github.com/Kemalstudio",
            type: 'website',
            images: [
                "../images/aura/aura-computers-fullpage.png",
            ]
        },
        {
            number: "02",
            title_key: "proj2_title",
            description_key: "proj2_description",
            tech_key: "Flutter, Dart",
            live_url: "#",
            github_url: "https://github.com/Kemalstudio",
            type: 'app',
            images: [
                "../images/aura/aura-app.jpg",
            ]
        },
        {
            number: "03",
            title_key: "proj3_title",
            description_key: "proj3_description",
            tech_key: "PHP, Laravel, Javascript, MySql/SQL, AJAX, JQuery, Blade, Postman",
            live_url: "#",
            github_url: "https://github.com/Kemalstudio",
            type: 'website',
            images: [
                "../images/aura/sonus_music_web.png",
            ]
        },
        {
            number: "04",
            title_key: "proj4_title",
            description_key: "proj4_description",
            tech_key: "Flutter, Dart",
            live_url: "#",
            github_url: "https://github.com/Kemalstudio",
            type: 'app',
            images: [
                "../images/aura/sonus_music_app.jpg",
            ]
        }
    ];

    let currentProjectIndex = 0;
    let isProjectChanging = false;

    const projectBgImage = document.getElementById('project-bg-image');
    const projectInfoCard = document.getElementById('project-info-card');
    const projectSlider = document.getElementById('project-slider');
    const projectNumber = document.getElementById('project-number');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectTech = document.getElementById('project-tech');
    const projectLiveLink = document.getElementById('project-live-link');
    const projectGithubLink = document.getElementById('project-github-link');
    const projectMainImage = document.getElementById('project-main-image');
    const projectSelector = document.getElementById('project-selector');
    const nextProjectBtn = document.querySelector('#work .next-project');
    const prevProjectBtn = document.querySelector('#work .prev-project');

    function showProject(index, animate = true) {
        if (isProjectChanging || !projectsData[index]) return;
        isProjectChanging = true;

        const project = projectsData[index];
        const currentLang = localStorage.getItem('portfolioLanguage') || 'ru';

        const updateContent = () => {
            projectNumber.textContent = project.number;
            projectTitle.textContent = translations[currentLang][project.title_key] || '';
            projectDescription.textContent = translations[currentLang][project.description_key] || '';
            projectTech.textContent = project.tech_key;

            projectLiveLink.href = project.live_url;
            projectGithubLink.href = project.github_url;

            projectBgImage.src = project.images[0];
            projectMainImage.src = project.images[0];
            projectMainImage.dataset.zoom = 1;
            projectMainImage.style.transform = 'scale(1)';

            if (project.type === 'app') {
                projectSlider.classList.add('is-app');
            } else {
                projectSlider.classList.remove('is-app');
            }

            projectSelector.querySelectorAll('li').forEach((item, itemIndex) => {
                item.classList.toggle('active', itemIndex === index);
            });

            if (animate) {
                setTimeout(() => {
                    projectInfoCard.classList.remove('is-changing');
                    projectSlider.classList.remove('is-changing');
                    isProjectChanging = false;
                }, 50);
            } else {
                projectInfoCard.classList.remove('is-changing');
                projectSlider.classList.remove('is-changing');
                isProjectChanging = false;
            }
        };

        if (animate) {
            projectInfoCard.classList.add('is-changing');
            projectSlider.classList.add('is-changing');
            setTimeout(updateContent, 300);
        } else {
            updateContent();
        }
    }

    function initializeWorkSection() {
        if (!projectSelector) return;

        const currentLang = localStorage.getItem('portfolioLanguage') || 'ru';
        projectsData.forEach((project, index) => {
            const li = document.createElement('li');
            li.dataset.index = index;
            li.textContent = translations[currentLang][project.title_key] || project.title_key;
            projectSelector.appendChild(li);
        });

        projectSelector.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const index = parseInt(e.target.dataset.index);
                if (index !== currentProjectIndex) {
                    currentProjectIndex = index;
                    showProject(currentProjectIndex);
                }
            }
        });

        nextProjectBtn.addEventListener('click', () => {
            currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
            showProject(currentProjectIndex);
        });

        prevProjectBtn.addEventListener('click', () => {
            currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
            showProject(currentProjectIndex);
        });

        const zoomInBtn = projectSlider.querySelector('.zoom-in');
        const zoomOutBtn = projectSlider.querySelector('.zoom-out');
        zoomInBtn.addEventListener('click', () => {
            let currentZoom = parseFloat(projectMainImage.dataset.zoom);
            if (currentZoom < 2.0) {
                currentZoom = (currentZoom + 0.2).toFixed(2);
                projectMainImage.dataset.zoom = currentZoom;
                projectMainImage.style.transform = `scale(${currentZoom})`;
            }
        });
        zoomOutBtn.addEventListener('click', () => {
            let currentZoom = parseFloat(projectMainImage.dataset.zoom);
            if (currentZoom > 0.6) {
                currentZoom = (currentZoom - 0.2).toFixed(2);
                projectMainImage.dataset.zoom = currentZoom;
                projectMainImage.style.transform = `scale(${currentZoom})`;
            }
        });

        showProject(currentProjectIndex, false);
    }

    setLanguage(savedLanguage);
    initializeWorkSection();
});