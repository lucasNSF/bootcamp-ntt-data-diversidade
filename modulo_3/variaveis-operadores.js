// Função para acessar a interface do terminal
// e imprimir algo
console.log("-=-=-= VARIÁVEIS E OPERADORES =-=-=-\n");

// Criando variável
let variavel;
// Atribuindo valor a variável
variavel = 20;

console.log("valor da variável: " + variavel);

variavel = "mudei meu valor :)";

console.log("valor da variável: " + variavel);

// Criando constante
const constante = 200;

console.log("\nvalor da constante: " + constante);

// Tentando mudar o valor da constante (ERRO)
// constante = "tentando mudar o valor";

console.log("\n-=-=-= DESAFIO =-=-=-");

/** DESAFIO DE CÓDIGO
 * Faça um programa para calcular um valor de uma viagem.
 *
 * Você terá 3 variáveis. Sendo elas:
 * - Preço do combustível.
 * - Gasto médio de combustível do carro por KM.
 * - Distância em KM da viagem.
 *
 * Imprima no console o valor que será gasto para realizar essa viagem.
 */

// Resolução

const precoCombustivel = 5.54;
const distanciaViagem = 120;
const gastoMedio = 3.5;

const combustivelGasto = distanciaViagem * gastoMedio;

console.log(`
Informações para a viagem:\n
Preço do combustível: R$${precoCombustivel.toFixed(2)}
Distância total da viagem: ${distanciaViagem} Km
Gasto médio de combustível do carro: ${gastoMedio}L por Km\n
Valor total da viagem: R$${(combustivelGasto * precoCombustivel).toFixed(2)}
`);
