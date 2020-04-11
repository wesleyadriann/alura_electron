const { ipcRenderer } = require('electron');

const linkAbout = document.querySelector('#link-about');

linkAbout.addEventListener('click', () => {
  ipcRenderer.send('open_window_about');
})
