function hello(...restonome: string[]) {

    let r : string = "";

    restonome.forEach(p => {
        r+= " " + p;
    });
    
    return r;
}

var varNome = hello("azul", "vermelho", "verde", "preto", "branco");

console.log(hello(varNome));
