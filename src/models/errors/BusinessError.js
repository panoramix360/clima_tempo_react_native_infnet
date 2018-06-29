import { ExtendableBuiltin } from "../../util/ClassUtil";
import BaseError from "./BaseError";

/**
 * Classe que modela o erro de negócio.
 */
export default class BusinessError extends ExtendableBuiltin(BaseError) {
  constructor() {
    super();
    this.message = "BusinessError";
  }
}
