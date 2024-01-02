import { TAppConfigConnection } from "@be/types/app-config.type";

export const getConnections = (): Promise<TAppConfigConnection[]> =>
  new Promise((resolve) => {
    window.electronAPI.
  })