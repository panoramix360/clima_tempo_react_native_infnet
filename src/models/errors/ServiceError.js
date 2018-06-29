import { ExtendableBuiltin } from "../../util/ClassUtil";
import BaseError from "./BaseError";

/**
 * Classe que modela o erro da requisicao do servico.
 */
export default class ServiceError extends ExtendableBuiltin(BaseError) {
  constructor() {
    super();
    this.message = "ServiceError";
  }
}
