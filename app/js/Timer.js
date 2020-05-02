const moment = require('moment');

class Timer {
  constructor(el) {
    this.el = el;
    this.segundos = moment.duration(this.el.textContent).asSeconds();
    this.timer = 0;
  }

  iniciar() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.segundos++;
      this.el.textContent = moment().startOf('day').seconds(this.segundos).format("HH:mm:ss");
    }, 1000)
  }

  parar() {
    clearInterval(this.timer);
  }

}

module.exports = Timer
