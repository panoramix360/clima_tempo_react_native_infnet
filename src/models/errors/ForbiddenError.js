import { ExtendableBuiltin } from "../../util/ClassUtil";
import BaseError from "./BaseError";

/**
 * Classe que modela o erro de nao autorizado.
 */
export default class ForbiddenError extends ExtendableBuiltin(BaseError) {
  constructor() {
    super();
    this.message = "ForbiddenError";
  }
}
