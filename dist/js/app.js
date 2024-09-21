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

    // Detect changes in days, hours, minutes, seconds
    if (currentSeconds !== prevSeconds) {
      console.log("Seconds changed");
      seconds.innerText = currentSeconds;
      prevSeconds = currentSeconds;
    }

    if (currentMinutes !== prevMinutes) {
      console.log("Minutes changed");
      minutes.innerText = currentMinutes;
      prevMinutes = currentMinutes;
    }

    if (currentHours !== prevHours) {
      console.log("Hours changed");
      hours.innerText = currentHours;
      prevHours = currentHours;
    }

    if (currentDays !== prevDays) {
      console.log("Days changed");
      days.innerText = currentDays;
      prevDays = currentDays;
    }
  }

  const interval = setInterval(updateCountdown, 1000);
}

// Start the countdown
updateDuration();
