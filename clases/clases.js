"use strict";
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        /**
         * Getter nombre
         * @return {string}
         */
        get: function () {
            return this._nombre;
        },
        /**
         * Setter nombre
         * @param {string} value
         */
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Persona.metodoEstatico = function () {
        return 10;
    };
    return Persona;
}());
var entidad = new Persona();
entidad.nombre = "hoassla";
console.log(entidad.nombre);
console.log(Persona.metodoEstatico());
