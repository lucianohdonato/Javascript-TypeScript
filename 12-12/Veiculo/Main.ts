import { Carro } from './Model/Carro';
import { Moto } from './Model/Moto';

var carro = new Carro("Herbie","Branco" );
var moto = new Moto("", "Vermelha");

carro.setplaca("OFP 857");
carro.setmarca("Volkswagen");
carro.setrodas(4);
carro.setvelocidade(100);
carro.setaceleracao(10);
carro.setvolumePortaMalas(209);
carro.setnumeroPortas(2);
carro.setlugares(2);
carro.setmarca("Fiat");
carro.ligar();
carro.acelerar();
carro.ligarSom();
carro.trocarMarcha();
carro.frear();
carro.desligar();

moto.setplaca("");
moto.setmarca("");
moto.setrodas(2);
moto.setvelocidade(200);
moto.setaceleracao(15);
moto.setantenaCortaLinha(true);
moto.setespacoCapacete(true);
moto.setrodas(2);
moto.ligar();
moto.acelerar();
moto.empinar();
moto.trocarMarcha();
moto.frear();
moto.desligar();
