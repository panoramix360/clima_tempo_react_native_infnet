import Constants from "./Constants";
import { NetInfo } from "react-native";
import ConnectivityError from "../models/errors/ConnectivityError";

/**
 * Classe utilizada para verificar a conectividade do app
 */
export default class Connectivity {
  /**
   * ASYNC
   * Funcao checar a conectividade e utilizar a constante se o app esta sendo rodado
   * no simulador ou nao
   *
   * @return {boolean} Booleano retornado se esta conectado ou nao
   */
  checkIsConnected = async (): Promise<boolean> => {
    let isConnected;
    if (true) {
      isConnected = await this.hasConnectivityForSimulator();
    } else {
      isConnected = await this.hasConnectivity();
    }
    return isConnected;
  };

  /**
   * ASYNC
   * Funcao para verificar conectividade num dispositivo real
   *
   * @return {boolean} Booleano retornado se esta conectado ou nao
   */
  hasConnectivity = async (): Promise<boolean> => {
    let isConnected = await NetInfo.isConnected.fetch().then(isConnected => {
      return isConnected;
    });
    if (!isConnected) {
      throw new ConnectivityError();
    }
    return isConnected;
  };

  /**
   * ASYNC
   * Funcao para verificar conectividade no simulador
   *
   * @return {boolean} Booleano retornado se esta conectado ou nao
   */
  hasConnectivityForSimulator = async (): Promise<boolean> => {
    let isConnected;
    try {
      const googleCall = await fetch("https://google.com");
      isConnected = googleCall.status === 200;
    } catch (e) {
      isConnected = false;
      throw new ConnectivityError();
    }
    return isConnected;
  };
}
