const { ipcRenderer, shell } = require('electron');
const process = require('process');

const closeAbout = document.querySelector('#close-about');
const linkGit = document.querySelector('#link-git');
const electronVersion = document.querySelector('#electron-version');

window.onload = () => {
  electronVersion.textContent = process.versions.electron;
}

closeAbout.addEventListener('click', () => {
  ipcRenderer.send('close_window_about');
})

linkGit.addEventListener('click', () => {
  shell.openExternal('https://github.com/wesleyadriann');
});
