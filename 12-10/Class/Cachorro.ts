import { Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero{
    
    private _Fucinho : boolean;
    private _CaninoAparente : boolean;
    
    public get Fucinho() : boolean {
        return this._Fucinho;
    }
    public set Fucinho(v : boolean) {
        this._Fucinho = v;
    }
    
    public get CaninoAparente() : boolean {
        return this._CaninoAparente;
    }
    public set CaninoAparente(v : boolean) {
        this._CaninoAparente = v;
    }

    latir(){
        console.log("Au au")
    }
    comeDever(){
        console.log("comendo dever de casa")
    }
}
