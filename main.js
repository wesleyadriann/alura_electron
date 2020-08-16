const {
  app,
  BrowserWindow,
  ipcMain,
  ipcRenderer,
} = require('electron');

const Data = require('./Data');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 750,
    height: 400
  });

  mainWindow.loadFile(`${__dirname}/app/index.html`);
})


app.on('window-all-closed', () => app.quit());


let aboutWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (aboutWindow === null) {
    aboutWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
      },
      width: 300,
      height: 220,
      alwaysOnTop: true,
      frame: false,
    })
    aboutWindow.on('closed', () => {
      aboutWindow = null;
    })
  }

  aboutWindow.loadFile(`${__dirname}/app/sobre.html`);
})

ipcMain.on('fechar-janela-sobre', () => {
  aboutWindow.close();
})

ipcMain.on('curso-parado', (event, curso, tempo) => {
  Data.salvaDados(curso, tempo);
})
