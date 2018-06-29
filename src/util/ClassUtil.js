/**
 * Funcao utilizado para corrigir a heranca dos objetos JavaScript utilizando prototype
 *
 * @param {any} cls - Classe que deve ser herdada
 * @return {any} - Classe com a heranca correta
 */
export const ExtendableBuiltin = function(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }
  ExtendableBuiltin.prototype = Object.create(cls.prototype);

  return ExtendableBuiltin;
};
