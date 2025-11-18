document.addEventListener('DOMContentLoaded', function() {
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    const seriesGrid = document.querySelector('.series-grid');
    
    if (scrollLeft && scrollRight && seriesGrid) {
      scrollLeft.addEventListener('click', () => {
        seriesGrid.scrollBy({ left: -300, behavior: 'smooth' });
      });
      
      scrollRight.addEventListener('click', () => {
        seriesGrid.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });