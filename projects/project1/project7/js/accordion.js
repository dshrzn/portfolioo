function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');
        const content = item.querySelector('.accordion__content');
        const icon = item.querySelector('.accordion__icon');
        
        header.addEventListener('click', function() {
            // Закрываем все открытые элементы
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion__content').style.maxHeight = null;
                }
            });
            
            // Переключаем текущий элемент
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    const tabs = document.querySelectorAll('.tabs__btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Функция для переключения вкладок
    function switchTab(event) {
        const targetTab = event.target;

        // Удаляем активность у всех кнопок вкладок
        tabs.forEach(tab => tab.classList.remove('active'));

        // Добавляем активность на кликнутую кнопку
        targetTab.classList.add('active');

        // Скрываем все содержимое вкладок
        tabContents.forEach(content => content.classList.remove('active'));

        // Показываем соответствующее содержимое
        const targetTabContent = document.getElementById(targetTab.dataset.tab);
        targetTabContent.classList.add('active');
    }

    // Добавляем обработчик событий для каждой вкладки
    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
}