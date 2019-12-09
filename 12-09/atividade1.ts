/**
 * Arquivo: defaultParams.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de parâmetros default em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 * 
 * 
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Optional and Default Parameters)
 *
 */

function calcularValorDesconto(valor:number, taxa:number = 0.50): string {
    return `O valor de Desconto da taxa aplicada é .....: R$${valor * taxa}`;
}


console.log(calcularValorDesconto(1000)); //0.50 (segundo parâmetro)
console.log(calcularValorDesconto(1000, 0.30));

/*resultado
O Valor de Desconto da taxa aplicada é.....:  500
O Valor de Desconto da taxa aplicada é.....:  300*/
