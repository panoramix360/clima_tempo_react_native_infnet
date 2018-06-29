import { ExtendableBuiltin } from "../../util/ClassUtil";
import BaseError from "./BaseError";

/**
 * Classe que modela o erro de Conectividade.
 */
export default class ConnectivityError extends ExtendableBuiltin(BaseError) {
  constructor() {
    super();
    this.message = "ConnectivityError";
  }
}
