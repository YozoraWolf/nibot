import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('botsAPI', {
  createBotJSON: () => ipcRenderer.invoke('createBotJSON'),
  readBotJSON: () => ipcRenderer.invoke('readBotJSON'),
  writeBotJSON: (bots: []) => ipcRenderer.invoke('writeBotJSON', bots),
  addBot: (config: {}) => ipcRenderer.invoke('addBot', config),
  removeBot: (name: string) => ipcRenderer.invoke('removeBot', name)
});

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
