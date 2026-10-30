const images = [
      {
        src: 'Academic.certs/data-analytics-certificate-brian-kitavi.png',
        alt: 'Data Analytics Certificate',
        title: 'Data Analytics Certificate',
        href: 'Academic.certs/data-analytics-certificate-brian-kitavi.png'
      },
      {
        src: 'Academic.certs/159-cybersecurity-certificate-brian-kitavi (2).png',
        alt: 'Cybersecurity Certificate',
        title: 'Cybersecurity Certificate',
        href: 'Academic.certs/159-cybersecurity-certificate-brian-kitavi (2).png'
      },
      {
        src: 'Academic.certs/89-professional-foundations-certificate-brian-kitavi (1).png',
        alt: 'Professional Foundations Certificate',
        title: 'Professional Foundations Certificate',
        href: 'Academic.certs/89-professional-foundations-certificate-brian-kitavi (1).png'
      }


    ];

    const gallery = document.getElementById('gallery');
    const animatedName = document.getElementById('animatedName');
    const nameText = ' Brian Kitavi';
    const certificatePassword = 'Brian2009';

    let nameIndex = 0;
    const nameTimer = setInterval(() => {
      if (animatedName) {
        animatedName.textContent = nameText.slice(0, nameIndex);
      }
      nameIndex += 1;
      if (nameIndex > nameText.length) {
        clearInterval(nameTimer);
      }
    }, 150);

    images.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.tabIndex = 0;

      const icon = document.createElement('div');
      icon.className = 'lock-icon';
      icon.textContent = '🔒';

      const title = document.createElement('span');
      title.className = 'card-title';
      title.textContent = item.title;

      const text = document.createElement('span');
      text.className = 'card-text';
      text.textContent = 'Click once to enter the password and unlock this certificate for viewing.';

      const form = document.createElement('div');
      form.className = 'card-form';
      form.hidden = true;

      const input = document.createElement('input');
      input.type = 'password';
      input.placeholder = 'Password';
      input.setAttribute('aria-label', 'Certificate password');

      const unlockButton = document.createElement('button');
      unlockButton.className = 'unlock-button';
      unlockButton.type = 'button';
      unlockButton.textContent = 'Unlock';

      const cancelButton = document.createElement('button');
      cancelButton.className = 'cancel-button';
      cancelButton.type = 'button';
      cancelButton.textContent = 'Cancel';

      const message = document.createElement('p');
      message.className = 'password-message';
      message.textContent = '';

      form.appendChild(input);
      form.appendChild(unlockButton);
      form.appendChild(cancelButton);
      form.appendChild(message);

      card.appendChild(icon);
      card.appendChild(title);
      card.appendChild(text);
      card.appendChild(form);
      gallery.appendChild(card);

      const showForm = () => {
        if (form.hidden) {
          // reset form state when showing
          form.hidden = false;
          input.value = '';
          message.textContent = '';
          message.style.color = '';
          input.disabled = false;
          unlockButton.disabled = false;
          input.focus();
        }
      };

      const hideForm = () => {
        // fully reset form to initial state
        form.hidden = true;
        input.value = '';
        message.textContent = '';
        message.style.color = '';
        input.disabled = false;
        unlockButton.disabled = false;
      };

      const validatePassword = () => {
        if (input.value === certificatePassword) {
          message.textContent = 'Certificate unlocked. Opening now...';
          message.style.color = '#059669';
          input.disabled = true;
          unlockButton.disabled = true;
          window.open(item.href, '_blank', 'noopener');
        } else {
          message.textContent = 'Incorrect password. Access denied.';
          message.style.color = '#b91c1c';
          input.focus();
        }
      };

      card.addEventListener('click', event => {
        if (event.target === unlockButton || event.target === cancelButton || event.target === input) {
          return;
        }
        showForm();
      });

      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          showForm();
        }
      });

      unlockButton.addEventListener('click', validatePassword);
      cancelButton.addEventListener('click', hideForm);
      input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          validatePassword();
        }
      });
    });

    const buttons = document.querySelectorAll('.btn-panel button');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const action = this.dataset.action;
        if (action === 'About') {
          window.location.href = 'about.html';
        } else if (action === 'skills') {
          window.location.href = 'skills.html';
        } else if (action === 'experience') {
          window.location.href = 'experience.html';
        } else if (action === 'education') {
          showEducationModal('education.html');
        } else if (action === 'contact') {
          window.location.href = 'contact.html';
        }
      });
    });

    document.querySelectorAll('.navbar nav a[href$="education.html"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        showEducationModal(this.href);
      });
    });

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
        educationInput.focus();
      }
    }

    educationSubmit.addEventListener('click', validateEducationPassword);
    educationCancel.addEventListener('click', hideEducationModal);
    educationInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') validateEducationPassword();
    });
    educationModal.addEventListener('click', function (e) {
      if (e.target === educationModal) hideEducationModal();
    });
