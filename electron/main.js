const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    titleBarStyle: 'hiddenInset',
    frame: false,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Menu.setApplicationMenu(null);
  if (isDev) {
    // 👉 Load Angular dev server
    win.loadURL('http://localhost:4200');
    // win.webContents.openDevTools();
  } else {
    // 👉 Load built Angular files (for production)
    win.loadFile(path.join(__dirname, '../dist/noteapp/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});