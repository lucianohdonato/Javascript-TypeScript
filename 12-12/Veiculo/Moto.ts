import { Veiculo } from './Veiculo';
import { Cambio } from './iCambio';

export class Moto extends Veiculo implements Cambio{
    private _antenaCortaLinha: boolean;
    private _espacoCapacete: boolean;

    public getantenaCortaLinha(): boolean {
        return this._antenaCortaLinha;
    }
    public setantenaCortaLinha(value: boolean) {
        this._antenaCortaLinha = value;
    }
    public getespacoCapacete(): boolean {
        return this._espacoCapacete;
    }
    public setespacoCapacete(value: boolean) {
        this._espacoCapacete = value;
    }

    empinar(){
        console.log("Achar que está numa bike e fazer uma merda dessas");
    }
    trocarMarcha() {
        console.log("Apertar embreagem e trocar marcha no pé");
    }    
    frear() {
        console.log("Apertar freio");
    }

}

