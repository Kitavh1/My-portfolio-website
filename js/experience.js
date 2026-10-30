document.getElementById('year').textContent = new Date().getFullYear();

    const EDUCATION_PASSWORD = 'Brian2009';
    const educationModal = document.getElementById('education-modal');
    const educationInput = document.getElementById('education-password-input');
    const educationError = document.getElementById('education-password-error');
    const educationSubmit = document.getElementById('education-password-submit');
    const educationCancel = document.getElementById('education-password-cancel');
    let educationTargetHref = 'education.html';

    function showEducationModal(href = 'education.html') {
      educationTargetHref = href;
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
    }

    function validateEducationPassword() {
      if (educationInput.value === EDUCATION_PASSWORD) {
        window.location.href = educationTargetHref;
      } else {
        educationError.textContent = 'Incorrect password. Please try again.';
      }
    }

    document.querySelectorAll('.navbar nav a[href$="education.html"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        showEducationModal(this.href);
      });
    });

    document.querySelectorAll('button[data-action="education"]').forEach(button => {
      button.addEventListener('click', function () {
        showEducationModal('education.html');
      });
    });

    educationSubmit.addEventListener('click', validateEducationPassword);
    educationCancel.addEventListener('click', hideEducationModal);
    educationInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') validateEducationPassword();
    });
    educationModal.addEventListener('click', function (e) {
      if (e.target === educationModal) hideEducationModal();
    });
