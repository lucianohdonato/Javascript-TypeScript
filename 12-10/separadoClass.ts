export class Carro{

    Cor: string;
    private _Id: number = 1345;
    Modelo: string;
    Ano: number;
    Marca: string;

    public get Id(): number {
        return this._Id;
    }
    public set Id(value: number) {
        this._Id = value;
    }

    ligar(){
        console.log("Ligando carro")
    }
    acelerar(){
        console.log("Acelerando")
    }
    frear(){
        console.log("Diminuindo velocidade até chegar a 0km/h")
    }
    desligar(){
        console.log("Desligando")
    }
}
