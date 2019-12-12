"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Veiculo_1 = require("./Veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.getvolumePortaMalas = function () {
        return this._volumePortaMalas;
    };
    Carro.prototype.setvolumePortaMalas = function (value) {
        this._volumePortaMalas = value;
    };
    Carro.prototype.getnumeroPortas = function () {
        return this._numeroPortas;
    };
    Carro.prototype.setnumeroPortas = function (value) {
        this._numeroPortas = value;
    };
    Carro.prototype.getlugares = function () {
        return this._lugares;
    };
    Carro.prototype.setlugares = function (value) {
        this._lugares = value;
    };
    Carro.prototype.ligarSom = function () {
        console.log("Ouvindo o Jazz do Ali");
    };
    Carro.prototype.trocarMarcha = function () {
        console.log("Pisando na embreagem e trocando a marcha");
    };
    Carro.prototype.frear = function () {
        console.log("Pisando na ambreagem e no freio");
    };
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
