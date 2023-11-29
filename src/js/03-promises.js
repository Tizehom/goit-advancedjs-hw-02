import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  event.currentTarget.reset();

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Success',
          message: `Fulfilled promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Error',
          message: `Rejected promise ${position} in ${delay}ms`,
          position: 'topRight',
        });
      });
    delayValue += stepValue;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
