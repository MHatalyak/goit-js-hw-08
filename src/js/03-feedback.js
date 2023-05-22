import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const storageKey = 'feedback-form-state';

const saveForm = throttle(() => {
  const form = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(storageKey, JSON.stringify(form));
}, 500);

form.addEventListener('input', saveForm);

document.addEventListener('DOMContentLoaded', () => {
  const storedForm = localStorage.getItem(storageKey);

  if (storedForm) {
    const { email, message } = JSON.parse(storedForm);

    emailInput.value = email;
    messageInput.value = message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const form = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem(storageKey);
  emailInput.value = '';
  messageInput.value = '';

  console.log(form);
});
