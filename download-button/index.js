const button = document.querySelector('.download-button');

button.addEventListener('click', () => {
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
    document.querySelector('i').classList.replace('bx-cloud-download', 'bx-check-circle');
    document.querySelector('.download-button-text').innerText = 'Completed';
  },6000);
});
