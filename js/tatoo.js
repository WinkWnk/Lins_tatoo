function toggleHeader() {
    var header = document.querySelector('header');
    if (header.style.display === 'none' || header.style.display === '') {
      header.style.display = 'block';
    } else {
      header.style.display = 'none';
    }
  }

  // Add a click event listener to the button
  document.getElementById('toggleHeader').addEventListener('click', toggleHeader);