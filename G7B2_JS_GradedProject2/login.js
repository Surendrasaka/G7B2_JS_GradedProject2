const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  if (username === 'username' && password === 'password') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'resume.html';
  } else {
    errorMessage.textContent = 'Invalid username/password';
  }
});



