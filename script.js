// Навигация по страницам
document.addEventListener('DOMContentLoaded', function() {
    // Элементы навигации (теперь только 3 кнопки)
    const animalsLink = document.getElementById('animals-link');
    const charityLink = document.getElementById('charity-link');
    const staffLink = document.getElementById('staff-link');
    const logoLink = document.getElementById('logo-link');
    
    // Страницы
    const homePage = document.getElementById('home-page');
    const animalsPage = document.getElementById('animals-page');
    const charityPage = document.getElementById('charity-page');
    const staffPage = document.getElementById('staff-page');
    
    // Кнопка помощи
    const helpButton = document.getElementById('help-button');
    
    // Функция для смены активной страницы
    function showPage(pageToShow) {
        // Скрыть все страницы
        const pages = [homePage, animalsPage, charityPage, staffPage];
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        
        // Показать выбранную страницу
        pageToShow.classList.add('active');
        pageToShow.style.display = 'block';
        
        // Обновить активную ссылку в навигации
        const navLinks = [animalsLink, charityLink, staffLink];
        navLinks.forEach(link => link.classList.remove('active'));
        
        if (pageToShow === animalsPage) animalsLink.classList.add('active');
        if (pageToShow === charityPage) charityLink.classList.add('active');
        if (pageToShow === staffPage) staffLink.classList.add('active');
        
        // Прокрутить к началу страницы
        window.scrollTo(0, 0);
    }
    
    // Обработчики событий для навигации
    animalsLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(animalsPage);
    });
    
    charityLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(charityPage);
    });
    
    staffLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(staffPage);
    });
    
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(homePage);
        
        // При переходе на главную страницу через логотип
        // убираем активный класс со всех кнопок навигации
        const navLinks = [animalsLink, charityLink, staffLink];
        navLinks.forEach(link => link.classList.remove('active'));
    });
    
    // Обработчик для кнопки помощи
    helpButton.addEventListener('click', function() {
        alert('Спасибо за желание помочь! Пожалуйста, свяжитесь с нами по телефону +7 (495) 123-45-67 или отправьте email на volunteer@dobriy-dom.ru для уточнения деталей.');
    });
    
    // Инициализация: показать главную страницу
    showPage(homePage);
    
    // Анимация появления карточек при прокрутке
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками животных и персонала
    document.querySelectorAll('.animal-card, .staff-card').forEach(card => {
        observer.observe(card);
    });
});