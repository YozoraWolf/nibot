import * as fs from 'fs';

interface BotConfig {
  name: string;
  signature: string;
  image_path?: string;
}

const BotService = {
  filePath: 'bots.json',

  createBotJSON(): void {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '[]');
    }
  },

  readBotJSON(): BotConfig[] {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(fileContent);
  },

  writeBotJSON(bots: BotConfig[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(bots, null, 2));
  },

  addBot(config: BotConfig): void {
    const bots = this.readBotJSON();
    bots.push(config);
    this.writeBotJSON(bots);
  },

  removeBot(name: string): void {
    let bots = this.readBotJSON();
    bots = bots.filter((bot) => bot.name !== name);
    this.writeBotJSON(bots);
  },
};

export default BotService;
