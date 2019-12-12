import { Cambio } from './iCambio';
import { Veiculo } from './Veiculo';

export class Carro extends Veiculo implements Cambio{
    private _volumePortaMalas: number;
    private _numeroPortas: number;
    private _lugares: number;

    public getvolumePortaMalas(): number {
        return this._volumePortaMalas;
    }
    public setvolumePortaMalas(value: number) {
        this._volumePortaMalas = value;
    }
    public getnumeroPortas(): number {
        return this._numeroPortas;
    }
    public setnumeroPortas(value: number) {
        this._numeroPortas = value;
    }
    public getlugares(): number {
        return this._lugares;
    }
    public setlugares(value: number) {
        this._lugares = value;
    }

    ligarSom(){
        console.log("Ouvindo o Jazz do Ali");
    }
    trocarMarcha() {
        console.log("Pisando na embreagem e trocando a marcha");
    }    
    frear() {
        console.log("Pisando na ambreagem e no freio");
    }

}
