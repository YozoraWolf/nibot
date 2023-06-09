import { ipcMain } from 'electron';
import BotService from '../../services/BotService';

ipcMain.handle('createBotJSON', () => {
  BotService.createBotJSON();
});

ipcMain.handle('readBotJSON', () => {
  return BotService.readBotJSON();
});

ipcMain.handle('writeBotJSON', (_event, bots) => {
  BotService.writeBotJSON(bots);
});

ipcMain.handle('addBot', (_event, config) => {
  BotService.addBot(config);
});

ipcMain.handle('removeBot', (_event, name) => {
  BotService.removeBot(name);
});