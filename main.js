const {
    app,
    BrowserWindow,
    ipcMain,
} = require('electron');

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true
        },
        width: 600,
        height: 400
    });

    mainWindow.loadFile(`${__dirname}/app/index.html`);


})


app.on('window-all-closed', () => app.quit());


let aboutWindow = null;
ipcMain.on('open_window_about', () => {
  if(aboutWindow === null) {
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

  aboutWindow.loadFile(`${__dirname}/app/about.html`);
})

ipcMain.on('close_window_about', () => {
  aboutWindow.close();
})
