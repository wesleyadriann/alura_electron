const {
    app,
    BrowserWindow,
} = require('electron');

app.on('ready', () => {
    console.log('started application');
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

    mainWindow.loadFile(`${__dirname}/app/index.html`)


})


app.on('window-all-closed', () => app.quit());
