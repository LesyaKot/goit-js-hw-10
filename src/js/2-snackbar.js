import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stateInputFulfilled = document.querySelector('input[value="fulfilled"]');
const stateInputRejected = document.querySelector('input[value="rejected"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  let delay = delayInput.value;
  let fulfilledDelay = stateInputFulfilled.checked ? delay : null;
  let rejectedDelay = stateInputRejected.checked ? delay : null;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInputFulfilled.checked) {
        resolve(fulfilledDelay);
      } else {
        reject(rejectedDelay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});
