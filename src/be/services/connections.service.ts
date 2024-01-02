import { NewConnectionDto } from "@be/dto/new-connection.dto";
import { TAppConfigConnection } from "@be/types/app-config.type";
import { AppConfig } from "@be/utils/app-config";
import { nanoid } from "nanoid";

export class ConnectionsService {
  public static async getConnnections(): Promise<TAppConfigConnection[]> {
    return [];
  }

  public static async addConnection(newConnectionDto: NewConnectionDto): Promise<void> {
    const appConfig = new AppConfig();

    appConfig.cfg.connections.push({
      id: nanoid(),
      ...newConnectionDto
    })

    await appConfig.save();
  }

  public static async deleteConnection(id: string): Promise<void> {
    const appConfig = new AppConfig();

    appConfig.cfg.connections.splice(
      appConfig.cfg.connections.findIndex(({ id: connId }) => connId === id),
      1
    );

    await appConfig.save();
  }
}
