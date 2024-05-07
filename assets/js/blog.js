const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', toggleMode);
const blogsDiv = document.getElementById('blogs');

function loadBlogs() {
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    console.log(blogs);

    if (blogs) {
        blogs.forEach(blog => {
            const div = document.createElement('div');
            div.classList.add('post');
            div.setAttribute('id', 'post');
            const h3 = document.createElement('h3');
            h3.classList.add('title');
            const hr = document.createElement('hr');
            const p = document.createElement('p');
            p.classList.add('content');
            const p2 = document.createElement('p');
            p2.classList.add('author');

            h3.textContent = blog.title;
            p.textContent = blog.content;
            p2.textContent = `Posted by: ${blog.username}`;

            div.appendChild(h3);
            div.appendChild(hr);
            div.appendChild(p);
            div.appendChild(p2);

            blogsDiv.appendChild(div);
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
  const backBtn = document.getElementById("back");
  backBtn.addEventListener("click", () => {
    location.href = './index.html'
});
})


window.onload = loadBlogs;

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



const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}