import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const timerDisplay = document.querySelector('.timer');
const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
startBtn.disabled = true;

let userSelectedDate;
let timerInterval;
let timerStarted = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    userSelectedDate = selectedDates[0];
    let currentDate = new Date();
    if (userSelectedDate >= currentDate) {
      startBtn.disabled = false;
    } else {
      iziToast.error({
        title: 'alert',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    }
  },
};
flatpickr(dateInput, options);

startBtn.addEventListener('click', () => {
  if (!timerStarted) {
    timerInterval = setInterval(updateTimer, 1000);
    timerStarted = true;
    startBtn.disabled = true;
    dateInput.disabled = true;
  }
});

function updateTimer() {
  let currentTime = Date.now();
  let delta = userSelectedDate - currentTime;

  if (delta <= 0) {
    clearInterval(timerInterval);
    timerDisplay.innerText = '00:00:00:00';
    timerStarted = false;
    startBtn.disabled = false;
    dateInput.disabled = false;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(delta);

  timerDisplay.querySelector('[data-days]').textContent = pad(days);
  timerDisplay.querySelector('[data-hours]').textContent = pad(hours);
  timerDisplay.querySelector('[data-minutes]').textContent = pad(minutes);
  timerDisplay.querySelector('[data-seconds]').textContent = pad(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  ms %= day;
  const hours = Math.floor(ms / hour);
  ms %= hour;
  const minutes = Math.floor(ms / minute);
  ms %= minute;
  const seconds = Math.floor(ms / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
