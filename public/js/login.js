const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const usernameElement = document.querySelector('#username-input-login').value.trim();
  const passwordElement = document.querySelector('#password-input-login').value.trim();
  
  if (username && password ) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ 
        username: usernameElement.value, 
        password: passwordElement.value }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);