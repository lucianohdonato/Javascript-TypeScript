import { Carro } from "./separadoClass";

var carro = new Carro();

carro.Cor = "Preto";
carro.Modelo = "Fuscão";
carro.Ano = 1983;
carro.Marca = "Volkswagen";
console.log(carro.Id);
carro.Id = 7698;

carro.ligar();
carro.acelerar();
carro.frear();
carro.desligar();
