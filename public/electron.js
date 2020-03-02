const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

var devTools = false;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});

  if(isDev){
    mainWindow.loadURL('http://localhost:8020')
  }else{
    mainWindow.loadFile('build/index.html')

  }


  //mainWindow.loadURL(isDev ? 'http://localhost:8020' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev && devTools==true) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});