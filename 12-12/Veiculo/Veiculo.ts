export class Veiculo{
    private _nome: string;
    private _cor: string;
    private _placa: string;
    private _marca: string;
    private _rodas: number;
    private _velocidade: number;
    private _aceleracao: number;

    public getnome(): string {
        return this._nome;
    }
    public setnome(value: string) {
        this._nome = value;
    }
    public getcor(): string {
        return this._cor;
    }
    public setcor(value: string) {
        this._cor = value;
    }
    public getplaca(): string {
        return this._placa;
    }
    public setplaca(value: string) {
        this._placa = value;
    }
    public getmarca(): string {
        return this._marca;
    }
    public setmarca(value: string) {
        this._marca = value;
    }
    public getrodas(): number {
        return this._rodas;
    }
    public setrodas(value: number) {
        this._rodas = value;
    }
    public getvelocidade(): number {
        return this._velocidade;
    }
    public setvelocidade(value: number) {
        this._velocidade = value;
    }
    public getaceleracao(): number {
        return this._aceleracao;
    }
    public setaceleracao(value: number) {
        this._aceleracao = value;
    }

    ligar(){
        console.log("Ligando...");
    }
    desligar(){
        console.log("Desligando");
    }
    acelerar(){
        this._velocidade += this._aceleracao;
        console.log("Aumentando velocidade");
    }
    frear(){
        this._velocidade -= this._aceleracao;
    }

}
