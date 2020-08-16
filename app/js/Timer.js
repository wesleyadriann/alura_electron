const { ipcRenderer } = require('electron');
const moment = require('moment');

class Timer {
  constructor(el) {
    this.el = el;
    this.tempo = moment.duration(el.textContent);
    this.segundos = this.tempo.asSeconds();
    this.timer = 0;
  }

  iniciar() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.segundos++;
      this.el.textContent = this.segundosParaHora();
    }, 1000)
  }

  parar(curso) {
    clearInterval(this.timer);
    ipcRenderer.send('curso-parado', curso, this.segundosParaHora());
  };

  segundosParaHora() {
    return moment().startOf('day').seconds(this.segundos).format("HH:mm:ss")
  }

}

module.exports = Timer
