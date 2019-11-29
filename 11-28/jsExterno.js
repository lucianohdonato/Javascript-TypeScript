function multiplicar(fator1, fator2) {
    console.log(fator1 * fator2);
}

function nomeIdade(nome, idade) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade + " anos");
}

function menorValor3(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < c) {
        return b;
    }
    else return c;
}

function concatenar(string1, string2, string3) {
    if (isNaN(string1) == false) {
        string1.toString();
    }
    if (isNaN(string2) == false) {
        string2.toString();
    }
    if (isNaN(string3) == false) {
        string3.toString();
    }
    return string1.concat(string2, string3);
}

function verificarFaixaEtaria(anos) {
    anos = Number(anos);
    var teste = isNaN(anos);
    //Com switch case não funiona comparar a key sem ser com o de igualdade 
    switch (anos) {
        case 10: 
            return "Criança";
            break;
        case anos >= 15 && anos < 30:
            return "Jovem";
            break;
        case anos >= 30 && anos < 60:
            return "Adulto";
            break;
        case anos > 60:
            return "Idoso";
            break;
        default:
            return "Pq esta entrando aqui?";
            break;
    }
}

function calculoIMC(altura, peso) {
    altura = parseFloat(altura)/100;
    peso = parseFloat(peso);
    imc = peso/(altura**2);
    if (isNaN(imc) == true) {
        alert("Erro no calculo, entrada de altura ou peso vazio")
    }
    return imc
}

function classificacaoIMC(imc) {
    if (imc < 16) {
        return "Baixo peso muito grave";
    } else if (imc < 16.99) {
        return "Baixo peso grave";
    }else if (imc < 19.49) {
        return "Baixo peso";
    }else if (imc < 24.99) {
        return "Peso normal";
    }else if (imc < 29.99) {
        return "Sobrepeso";
    }else if (imc < 34.99) {
        return "Obesidade grau i";
    }else if (imc < 39.99) {
        return "Obesidade grau ii";
    }else{
        return "Obesidade grau iii";
    }
}



