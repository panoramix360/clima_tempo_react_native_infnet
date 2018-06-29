import { ExtendableBuiltin } from "../../util/ClassUtil";
import BaseError from "./BaseError";

/**
 * Classe que modela o erro de nao autorizado.
 */
export default class UnauthorizedError extends ExtendableBuiltin(BaseError) {
  constructor() {
    super();
    this.message = "UnauthorizedError";
  }
}
