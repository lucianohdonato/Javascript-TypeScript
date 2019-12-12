"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo(nome, cor) {
        this._nome = nome;
        this._cor = cor;
    }
    Veiculo.prototype.getnome = function () {
        return this._nome;
    };
    Veiculo.prototype.setnome = function (value) {
        this._nome = value;
    };
    Veiculo.prototype.getcor = function () {
        return this._cor;
    };
    Veiculo.prototype.setcor = function (value) {
        this._cor = value;
    };
    Veiculo.prototype.getplaca = function () {
        return this._placa;
    };
    Veiculo.prototype.setplaca = function (value) {
        this._placa = value;
    };
    Veiculo.prototype.getmarca = function () {
        return this._marca;
    };
    Veiculo.prototype.setmarca = function (value) {
        this._marca = value;
    };
    Veiculo.prototype.getrodas = function () {
        return this._rodas;
    };
    Veiculo.prototype.setrodas = function (value) {
        this._rodas = value;
    };
    Veiculo.prototype.getvelocidade = function () {
        return this._velocidade;
    };
    Veiculo.prototype.setvelocidade = function (value) {
        this._velocidade = value;
    };
    Veiculo.prototype.getaceleracao = function () {
        return this._aceleracao;
    };
    Veiculo.prototype.setaceleracao = function (value) {
        this._aceleracao = value;
    };
    Veiculo.prototype.ligar = function () {
        console.log("Ligando...");
    };
    Veiculo.prototype.desligar = function () {
        console.log("Desligando");
    };
    Veiculo.prototype.acelerar = function () {
        this._velocidade += this._aceleracao;
        console.log("Aumentando velocidade");
    };
    Veiculo.prototype.frear = function () {
        this._velocidade -= this._aceleracao;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
