const { app, BrowserWindow, globalShortcut } = require('electron')

const commands = require('./src/commands/main.js');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    altura: 600,
    transparent: true,
    frame:false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  return win;
}

app.whenReady()
  .then(() => {

    let win  = createWindow()

    for(command of commands){
      globalShortcut.register( command.commandName, () => { commands[0].process(win) } )
    }



  })
  .catch((err)=>console.log(err))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
