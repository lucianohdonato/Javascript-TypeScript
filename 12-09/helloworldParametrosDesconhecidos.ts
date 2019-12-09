function hello(nome : Array<string> = ["world"]) : string {
    for (let i = 0; i < nome.length; i++) {
        resposta = resposta.concat(" " + nome[i]);
    }
    return resposta;
}

var resposta = "Hello,";

var varLista : Array<string> = ["world", "estamos", "testando", "array"];

console.log(hello(varLista));
