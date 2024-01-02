import { TAppConfig } from "@be/types/app-config.type";
import { Singleton } from "./singleton";
import fs from "node:fs";
import { App } from "electron";
import { APP_CONFIG_TEMPLATE } from "./constants";

@Singleton
export class AppConfig {
  private readonly path: string;
  public readonly cfg: TAppConfig;

  constructor(app?: App) {
    this.path = `${app.getPath('userData')}/config.json`;

    if(!fs.existsSync(this.path)) {
      this.cfg = APP_CONFIG_TEMPLATE;
      fs.writeFileSync(this.path, JSON.stringify(this.cfg));
    }

    const file = fs.readFileSync(this.path, "utf-8");

    this.cfg = JSON.parse(file);
  }

  public async save(): Promise<void> {
    return new Promise((resolve) => {
      fs.writeFile(this.path, JSON.stringify(this.cfg), null, () => resolve());
    })
  }
}