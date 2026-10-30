document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('button[data-href]').forEach(button => {
  button.addEventListener('click', function () {
    window.location.href = this.dataset.href;
  });
});
