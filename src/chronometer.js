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

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
     return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    let aNum = value.toString();
    if(aNum.length<2){
      aNum = "0" + aNum.slice(0,1);
    }
    return aNum;
  }

  stop() {
    clearInterval(this.stopTimerNow)  
  }

  reset() {
    this.currentTime = 0;
    }

  split() {
    // ... your code goes here
  }
}
