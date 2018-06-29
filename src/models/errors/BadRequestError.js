import { ExtendableBuiltin } from "../../util/ClassUtil";
import BaseError from "./BaseError";

/**
 * Classe que modela o erro de Bad request.
 */
export default class BadRequestError extends ExtendableBuiltin(BaseError) {
  constructor() {
    super();
    this.message = "BadRequestError";
  }
}
