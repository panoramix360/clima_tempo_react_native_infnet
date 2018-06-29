import { ExtendableBuiltin } from "../../util/ClassUtil";

/**
 * Classe que modela o erro basico.
 */
export default class BaseError extends ExtendableBuiltin(Error) {
  constructor() {
    super();
  }
}
