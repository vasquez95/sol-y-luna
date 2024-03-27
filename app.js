const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeBtn.classList.toggle('active');
  if (body.classList.contains('dark-theme')) {
    themeBtn.textContent = '🌙'; // Cambiar a icono de luna
    themeBtn.setAttribute('aria-label', 'Tema Oscuro');
  } else {
    themeBtn.textContent = '🌕'; // Cambiar a icono de sol
    themeBtn.setAttribute('aria-label', 'Tema Claro');
  }
});
