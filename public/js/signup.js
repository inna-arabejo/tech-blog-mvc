const signupFormHandler = async (event) => {
  event.preventDefault();

  const usernameElement = document.querySelector('#username-input-signup').value.trim();
  const passwordElement = document.querySelector('#password-input-signup').value.trim();

  if (username && password ) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users', {
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
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
