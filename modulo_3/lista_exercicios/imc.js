/** DESAFIO DE CÓDIGO
 * O IMC (Índice de Massa Corporal) é um critério da OMS para dar uma indicação sobre a condição
 * de peso de uma pessoa adulta.
 *
 * Fórmula do IMC:
 * IMC = peso / (altura * altura)
 *
 * Elabore um algoritmo que, dado o peso e a altura de uma pessoa, mostre sua condição de acordo com
 * a tabela abaixo:
 *
 * - Abaixo de 18.5 (Abaixo do peso)
 * - Entre 18.5 e 25 (Peso normal)
 * - Entre 25 e 30 (Acima do peso)
 * - Entre 30 e 40 (Obesidade)
 * - Acima de 40 (Obesidade mórbida)
 */

const peso = 66.5;
const altura = 1.75;
const imc = peso / altura ** 2;

console.log("Seu IMC = " + imc.toFixed(1));
if (imc < 18.5) {
  console.log("Categoria: abaixo do peso");
} else if (imc >= 18.5 && imc <= 25) {
  console.log("Categoria: peso normal");
} else if (imc > 25 && imc <= 30) {
  console.log("Categoria: acima do peso");
} else if (imc > 30 && imc <= 40) {
  console.log("Categoria: obesidade");
} else {
  console.log("Categoria: obesidade mórbida");
}
