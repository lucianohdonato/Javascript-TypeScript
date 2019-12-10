export class Computador{
    
    private _PlacaMae: string;
    private _Processador: string;
    private _MemoriaRam: number;
    private _ChipGrafico: string;
    

    public get PlacaMae(): string {
        return this._PlacaMae;
    }
    public set PlacaMae(value: string) {
        this._PlacaMae = value;
    }
    public get Processador(): string {
        return this._Processador;
    }
    public set Processador(value: string) {
        this._Processador = value;
    }
    public get MemoriaRam(): number {
        return this._MemoriaRam;
    }
    public set MemoriaRam(value: number) {
        this._MemoriaRam = value;
    }
    public get ChipGrafico(): string {
        return this._ChipGrafico;
    }
    public set ChipGrafico(value: string) {
        this._ChipGrafico = value;
    }

    ligar(){
        console.log("Ligando")
    }
    desligar(){
        console.log("Desligando")
    }
    conectarComInternet(){
        console.log("Internet on")
    }
    calcular(){
        console.log("Calculando")
    }
}
