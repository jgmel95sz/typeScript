"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this._nombre = nombre;
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
    return Persona;
}());
exports.Persona = Persona;
