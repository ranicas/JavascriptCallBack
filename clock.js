function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(this.currentTime.getHours() + ":" +
      this.currentTime.getMinutes() + ":" +
       this.currentTime.getSeconds());
};

  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
Clock.prototype.run = function () {
  this.currentTime = new Date();
  this.printTime();
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  this.currentTime.setSeconds(this.currentTime.getSeconds() + 5);
  // 2. Call printTime.
  this.printTime();
};

clock = new Clock();
clock.run();

