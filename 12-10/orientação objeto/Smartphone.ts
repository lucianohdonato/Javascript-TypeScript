import { Computador } from './Computador'

export class Smartphone extends Computador{
    
    ChipSIM : boolean;
    Lanterna : boolean;
    Camera : string;
    TouchScreen : boolean;
    Bateria : number;  
    
    fazerChamadas(){
        console.log("Lingando...")
    }
    receberSMS(){
        console.log("1 nova mensagem")
    }
    tirarFotos(){
        console.log("Onomatopeia que represente")
    }
    carregar(){
        console.log("Bateria 100%")
    }
}
