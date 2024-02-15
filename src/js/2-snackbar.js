import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stateInput = document.querySelector('input[name="state"]');

const button = document.querySelector('button');

form.addEventListener('submit', event => {
  event.preventDefault();

  let delay = delayInput.value;
  let fulfilledDelay = 'fulfilled';
  let rejectedDelay = 'rejected';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateInput.value === 'fulfilled') {
        resolve(fulfilledDelay);
      } else {
        reject(rejectedDelay);
      }
    }, delay);
  });

  promise
    .then(fulfilledDelay => {
      iziToast.success({
        title: 'Fulfilled promise',
        message: `✅ Fulfilled promise in ${fulfilledDelay}ms`,
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: 'Rejected promise',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
      });
    });
});
