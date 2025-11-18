const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const loginModal = document.getElementById('loginModal');

openModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

