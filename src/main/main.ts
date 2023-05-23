import { app, BrowserWindow, ipcMain, session, shell } from 'electron';
import { join } from 'path';
import { config } from 'dotenv';

config({ path: join(__dirname, '../../.env') });


function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    frame: false,
    
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['script-src \'self\'']
      }
    })
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message', (event, message) => {
  console.log(message);
})

ipcMain.handle('minimizeApp', () => {
  const currentWindow = BrowserWindow.getFocusedWindow();
  if (currentWindow) {
    currentWindow.minimize();
  }
});

ipcMain.handle('maximizeApp', () => {
  const currentWindow = BrowserWindow.getFocusedWindow();
  if (currentWindow) {
    if(!currentWindow.isMaximized()) {
      currentWindow.maximize();
    } 
    else {
      currentWindow.unmaximize();
    } 
  }
});

ipcMain.handle('closeApp', () => {
  const currentWindow = BrowserWindow.getFocusedWindow();
  if (currentWindow) {
    currentWindow.close();
    app.quit();
  }
});

ipcMain.handle('openPost', async (event, id) => {
  console.log("OPEN: ", `${process.env.DBOORU_URL}/posts/${id}`);
  shell.openExternal(`${process.env.DBOORU_URL}/posts/${id}`);
});