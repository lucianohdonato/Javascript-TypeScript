function hello(nome) {
    if (nome === void 0) { nome = ["world"]; }
    for (var i = 0; i < nome.length; i++) {
        resposta = resposta.concat(" " + nome[i]);
    }
    return resposta;
}
var resposta = "Hello,";
var varLista = ["world", "estamos", "testando", "array"];
console.log(hello(varLista));
