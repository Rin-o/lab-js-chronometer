class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

start(printTimeCallback) {
  this.stopTimerNow = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
      printTimeCallback();
      }
    }, 1000)
  }
      

  start.autoIncrement();
  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
