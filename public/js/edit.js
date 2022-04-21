const  editFormHandler = async (event) => {
  event.preventDefault();

  const titleElement = document.getElementById('post-title').value.trim();
  const bodyElement = document.getElementById('post-body').value.trim();
  const postId = document.getElementById('post-id').value.trim();

  if (title && body && post) {
    const response = await fetch('/api/post', {
      method: 'PUT',
      body: JSON.stringify({ 
        title: titleElement.value, 
        body: bodyElement.value, 
        post: postId.value }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);
