// This code assumes a simple in-memory authentication system for demonstration purposes. This should not be used in a real-world application.
let users = [
    {
        username: "user1",
        password: "password1"
    },
    {
        username: "user2",
        password: "password2"
    },
    {
        username: "user3",
        password: "password3"
    }
];

function login(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('userInput').value;
    let password = document.getElementById('passInput').value;
    if (login(username, password)) {
        alert('Login successful');
    } else {
        alert('Invalid username and/or password');
    }
});





