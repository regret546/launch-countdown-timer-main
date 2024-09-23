const days = document.querySelector("#countDays");
const hours = document.querySelector("#countHours");
const minutes = document.querySelector("#countMinutes");
const seconds = document.querySelector("#countSeconds");

function updateDuration() {
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 8);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //variables to track the previous values
  let prevSeconds = null;
  let prevMinutes = null;
  let prevHours = null;
  let prevDays = null;

  function updateCountdown() {
    const now = new Date();
    const gap = futureDate.getTime() - now.getTime();

    /*    if (gap <= 0) {
      clearInterval(interval); // Stop countdown when it reaches zero
      days.innerText = "0";
      hours.innerText = "0";
      minutes.innerText = "0";
      seconds.innerText = "0";
      return;
    }
 */

    // Calculate time units
    const currentDays = Math.floor(gap / day);
    const currentHours = Math.floor((gap % day) / hour);
    const currentMinutes = Math.floor((gap % hour) / minute);
    const currentSeconds = Math.floor((gap % minute) / second);

    // Detect changes in days, hours, minutes, seconds and add animation
    if (currentSeconds !== prevSeconds) {
      setTimeout(() => {
        seconds.innerText = currentSeconds;
        prevSeconds = currentSeconds;
      }, 100);
      flipDown(seconds.closest(".card").querySelector("#topCard"), seconds);
    }

    if (currentMinutes !== prevMinutes) {
      flipDown(minutes.closest(".card").querySelector("#topCard"), minutes);
      setTimeout(() => {
        minutes.innerText = currentMinutes;
        prevMinutes = currentMinutes;
      }, 100);
    }

    if (currentHours !== prevHours) {
      flipDown(hours.closest(".card").querySelector("#topCard"), hours);
      setTimeout(() => {
        hours.innerText = currentHours;
        prevHours = currentHours;
      }, 100);
    }

    if (currentDays !== prevDays) {
      flipDown(days.closest(".card").querySelector("#topCard"), days);
      setTimeout(() => {
        days.innerText = currentDays;
        prevDays = currentDays;
      }, 100);
    }
  }

  const interval = setInterval(updateCountdown, 1000);
}

function flipDown(cardTop, cardNumContainer) {
  cardTop.classList.add("animate-flip-down");
  cardNumContainer.classList.add("animate-flip-down");

  cardTop.addEventListener(
    "animationend",
    function () {
      cardTop.classList.remove("animate-flip-down");
    },
    { once: true }
  );

  cardNumContainer.addEventListener(
    "animationend",
    function () {
      cardNumContainer.classList.remove("animate-flip-down");
    },
    { once: true }
  );
}

// Start the countdown
updateDuration();
