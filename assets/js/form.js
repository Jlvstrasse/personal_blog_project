let msg = document.createElement('p'); 
let form = document.getElementById('info');  
let usernameInput = document.getElementById('username');
let titleInput = document.getElementById('title');
let contentInput = document.getElementById('content');
const submitBtn = document.getElementById("submit");

let storageData = JSON.parse(localStorage.getItem('blogs')) || [];

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    if (!username || !title || !content) {
        msg.textContent = "Complete the form.";
        form.appendChild(msg);
        msg.setAttribute('style', 'color: red; text-align: center');
    } else { 
        let newObj = {
            username: username,
            title: title,
            content: content
        };
        
        console.log('Data to be saved:', newObj);
        saveToStorage(newObj);
        location.href = './blog.html';
    }
});

function saveToStorage(newObj) {
    storageData.push(newObj);
    localStorage.setItem('blogs', JSON.stringify(storageData));
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    saveFormData();
});

function saveFormData() {

}

