import { NewConnectionDto } from "@be/dto/new-connection.dto";
import { ConnectionsService } from "@be/services/connections.service";
import { TAppConfigConnection } from "@be/types/app-config.type";

export class ConnectionsController {
  public async getConnnections(): Promise<TAppConfigConnection[]> {
    return ConnectionsService.getConnnections();
  }

  public async addConnection(newConnectionDto: NewConnectionDto): Promise<void> {
    await ConnectionsService.addConnection(newConnectionDto);
  }
  
  public async deleteConnection(id: string): Promise<void> {
    await ConnectionsService.deleteConnection(id);
  }
}
