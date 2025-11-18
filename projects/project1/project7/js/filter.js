function initFilter() {
    const filterContainers = document.querySelectorAll('.filter');
    
    filterContainers.forEach(container => {
        const filterButtons = container.querySelectorAll('.filter__btn');
        const itemsToFilter = document.querySelectorAll('.movie-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Удаляем активный класс у всех кнопок
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Добавляем активный класс текущей кнопке
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Фильтрация элементов
                itemsToFilter.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
}