class Carro{

    //Atributos
    Cor: string;
    private _Id: number = 1345; //Apenas acessivel dentro da Classe
    Modelo: string;
    Ano: number;
    Marca: string;

    public get Id(): number {
        return this._Id;
    } //Definindo que o atributo _Id que está privado poderá ter apenas acesso de leitura
    public set Id(value: number) {
        this._Id = value;
    } //Definindo que o atributo _Id que está privado poderá ter apenas acesso de escrita

    //Metodos
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

//Instanciando objeto à Classe
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
