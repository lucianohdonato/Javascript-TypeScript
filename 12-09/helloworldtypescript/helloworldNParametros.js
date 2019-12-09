function hello() {
    var restonome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        restonome[_i] = arguments[_i];
    }
    var r = "";
    restonome.forEach(function (p) {
        r += " " + p;
    });
    return r;
}
var varNome = hello("azul", "vermelho", "verde", "preto", "branco");
console.log(hello(varNome));
