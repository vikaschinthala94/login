document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'vikas@gmail.com' && password === 'vikas@vV') {
       
        alert('Login successful. Redirecting...');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});

