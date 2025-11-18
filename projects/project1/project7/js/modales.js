// Открытие/закрытие модального окна для "Попробовать бесплатно"
document.addEventListener('DOMContentLoaded', function () {
    const openTrialModalBtn = document.getElementById('openTrialModal');
    const closeTrialModalBtn = document.getElementById('closeTrialModal');
    const trialModal = document.getElementById('trialModal');
  
    if (openTrialModalBtn && closeTrialModalBtn && trialModal) {
      openTrialModalBtn.addEventListener('click', () => {
        trialModal.style.display = 'flex';
      });
  
      closeTrialModalBtn.addEventListener('click', () => {
        trialModal.style.display = 'none';
      });
  
      window.addEventListener('click', (e) => {
        if (e.target === trialModal) {
          trialModal.style.display = 'none';
        }
      });
    }
  });
  