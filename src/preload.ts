import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getConnections: () => ipcRenderer.send('get:connections')
})