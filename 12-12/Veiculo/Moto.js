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
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.getantenaCortaLinha = function () {
        return this._antenaCortaLinha;
    };
    Moto.prototype.setantenaCortaLinha = function (value) {
        this._antenaCortaLinha = value;
    };
    Moto.prototype.getespacoCapacete = function () {
        return this._espacoCapacete;
    };
    Moto.prototype.setespacoCapacete = function (value) {
        this._espacoCapacete = value;
    };
    Moto.prototype.empinar = function () {
        console.log("Achar que está numa bike e fazer uma merda dessas");
    };
    Moto.prototype.trocarMarcha = function () {
        console.log("Apertar embreagem e trocar marcha no pé");
    };
    Moto.prototype.frear = function () {
        console.log("Apertar freio");
    };
    return Moto;
}(Veiculo_1.Veiculo));
exports.Moto = Moto;
