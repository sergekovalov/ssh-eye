import { ipcMain } from "electron";
import { ConnectionsController } from "./controllers/connections.controller";

export default function() {
  initConnectionsController();
}

function initConnectionsController() {
  const controller = new ConnectionsController();

  ipcMain.on('get:connections', async (event, ...args) => {
    const result = await controller.getConnnections()
    
    return result;
  })
  
  ipcMain.on('post:connections', async (event, ...args) => {
    await controller.addConnection(...args);
  })
  
  ipcMain.on('delete:connections/', async (event, ...args) => {
    await controller.deleteConnection(...args);
  })
}
