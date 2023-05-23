import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message)
})

contextBridge.exposeInMainWorld('electron', {
  // Expose only the methods you need
  minimizeApp: () => {
    ipcRenderer.invoke('minimizeApp');
  },
  maximizeApp: () => {
    ipcRenderer.invoke('maximizeApp');
  },
  closeApp: () => {
    ipcRenderer.invoke('closeApp');
  },
  openPost: (id) => {
    ipcRenderer.invoke('openPost', id)
  }
});
