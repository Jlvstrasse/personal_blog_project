const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', toggleMode);

function toggleMode() {
  const currentMode = document.documentElement.getAttribute('data-theme');
  if (currentMode === 'dark') {
    setMode('light');
  } else {
    setMode('dark');
  }
}

function setMode(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);

const modeToggle = document.getElementById('mode-toggle');
  modeToggle.textContent = mode === 'dark' ? '☀️' : '🌒';
}


// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}