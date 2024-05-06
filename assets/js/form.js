const form = document.querySelector('.form'); // Select the form element

form.addEventListener('submit', saveFormData); // Add event listener to the form

function saveFormData(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const card = document.querySelector('.title-card'); // Assuming card is the container for the message

    const msg = document.createElement('p');

    if (!username || !title || !content) {
        msg.textContent = "Complete the form.";
        card.appendChild(msg);
        msg.setAttribute('style', 'color: red; text-align: center');
    } else {
        const userObj = {
            username: username,
            title: title,
            content: content
        };

        saveToStorage(userObj);
        location.href = './blog.html';
    }
}

function saveToStorage(userObj) {
    let storageData = JSON.parse(localStorage.getItem('blogs')) || [];
    storageData.push(userObj);
    localStorage.setItem('blogs', JSON.stringify(storageData));
}
