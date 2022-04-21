const deletePostHandler = async (event) => {
  console.log('clicked', event)
  event.preventDefault();

  const postId = document.getElementById('post-id').value.trim();

    fetch(`/api/post` + postId.value, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post.');
    }
};

document
  .querySelector('.delete-button')
  .addEventListener('click', deletePostHandler);