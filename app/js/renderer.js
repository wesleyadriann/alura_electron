const { ipcRenderer } = require('electron');
const Timer = require('./Timer');

const Data = require('../../Data');

const linkSobre = document.querySelector('#link-sobre');
const botaoPlay = document.querySelector('.botao-play');
const tempo = document.querySelector('.tempo');
const curso = document.querySelector('.curso');

window.onload = () => {
  Data.pegaDados(curso.textContent)
    .then((dados) => tempo.textContent = dados.tempo);
}

linkSobre.addEventListener('click', () => {
  ipcRenderer.send('abrir-janela-sobre');
});

const images = {
  play: 'assets/images/play-button.svg',
  stop: 'assets/images/stop-button.svg',
};

const timer = new Timer(tempo);

botaoPlay.addEventListener('click', () => {
  botaoPlay.src = botaoPlay.src.includes(images.play) ?
    (() => {
      timer.iniciar();
      return images.stop
    })()
    :
    (() => {
      timer.parar(curso.textContent);
      return images.play
    })();
})
