const { app, BrowserWindow } = require('electron')


async function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    await win.loadFile('index.html')

    console.log("Hello World")
}

app.whenReady().then(createWindow)