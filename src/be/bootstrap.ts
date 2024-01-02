import { App } from "electron"
import { AppConfig } from "./utils/app-config"
import router from "./router";

export default function (app: App) {
  new AppConfig(app);

  router();
}