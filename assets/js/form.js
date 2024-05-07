const msg = document.createElement('p'); 
const form = document.getElementById('info');   

function saveFormData(event) {
    event.preventDefault();
    

    let username = document.querySelector('#username').value;
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;

    

    if (!username || !title || !content) {
        msg.textContent = "Complete the form.";
        form.appendChild(msg);
        msg.setAttribute('style', 'color: red; text-align: center');
       
    } else {
        let userObj = {
            username: username,
            title: title,
            content: content
        }
        console.log(username)

        saveToStorage(userObj);
        location.href = './blog.html';
}
}
function saveToStorage(userObj) {
    let storageData = JSON.parse(localStorage.setItem('blogs')) || [];
    storageData.push(userObj);
    localStorage.setItem('blogs', JSON.stringify(storageData));
}


document.addEventListener('DOMContentLoaded', function() {
    info.addEventListener('submit', saveFormData); 
   })


// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtn = document.getElementById("submit");
//     submitBtn.addEventListener("click", () => {
//       location.href = './blog.html'
//   });
// });




