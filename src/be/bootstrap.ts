import { App } from "electron"
import fs from "node:fs"

export default function (app: App) {
  const config = fs.readFileSync(app.getPath('userData'), "utf-8")

  if(!config) {
    
  }

  console.log(">>>", )
}