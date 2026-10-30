document.getElementById('year').textContent = new Date().getFullYear();

const EDUCATION_PASSWORD = 'Brian2009';
const educationModal = document.getElementById('education-modal');
const educationInput = document.getElementById('education-password-input');
const educationError = document.getElementById('education-password-error');
const educationSubmit = document.getElementById('education-password-submit');
const educationCancel = document.getElementById('education-password-cancel');
let educationTargetHref = 'education.html';
let educationOpener = null;

function showEducationModal(href = 'education.html', opener = null) {
  educationTargetHref = href;
  educationOpener = opener;
  educationError.textContent = '';
  educationInput.value = '';
  educationModal.classList.remove('hidden');
  educationModal.setAttribute('aria-hidden', 'false');
  educationInput.focus();
}

function hideEducationModal() {
  educationModal.classList.add('hidden');
  educationModal.setAttribute('aria-hidden', 'true');
  educationError.textContent = '';
  educationInput.value = '';
  educationOpener?.focus();
}

function validateEducationPassword() {
  if (educationInput.value === EDUCATION_PASSWORD) {
    window.location.href = educationTargetHref;
    return;
  }

  educationError.textContent = 'Incorrect password. Please try again.';
  educationInput.focus();
  educationInput.select();
}

document.querySelectorAll('button[data-action]').forEach(button => {
  button.addEventListener('click', function () {
    const destinations = {
      contact: 'contact.html',
      homepage: 'Homepage.html',
      experience: 'experience.html'
    };
    const action = this.dataset.action;

    if (action === 'education') {
      showEducationModal('education.html', this);
    } else if (destinations[action]) {
      window.location.href = destinations[action];
    }
  });
});

document.querySelectorAll('.navbar nav a[href$="education.html"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showEducationModal(link.href, link);
  });
});

educationSubmit.addEventListener('click', validateEducationPassword);
educationCancel.addEventListener('click', hideEducationModal);
educationInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') validateEducationPassword();
});
educationModal.addEventListener('click', event => {
  if (event.target === educationModal) hideEducationModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !educationModal.classList.contains('hidden')) {
    hideEducationModal();
  }
});
