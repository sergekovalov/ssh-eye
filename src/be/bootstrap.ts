import { App } from "electron"
import { AppConfig } from "./utils/app-config"

export default function (app: App) {
  new AppConfig(app);
}