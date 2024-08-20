// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const responseMessage = document.getElementById('responseMessage');

//     if (name === '' || email === '' || message === '') {
//         responseMessage.textContent = 'All fields are required.';
//         return;
//     }

//     if (!validateEmail(email)) {
//         responseMessage.textContent = 'nixxaditya@gmail.com';
//         return;

//     }

//     responseMessage.textContent = 'Thank you for your message!';
//     responseMessage.style.color = 'green';
//     document.getElementById('contactForm').reset();
// });

// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const formMessage = document.getElementById('formMessage');
    formMessage.style.color = 'red';

    if (!name || !email || !message) {
        formMessage.innerText = 'Please fill out all fields.';
        return;
    }

    if (!validateEmail(email)) {
        formMessage.innerText = 'Please enter a valid email address.';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.innerText = 'Thank you for your message!';
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

