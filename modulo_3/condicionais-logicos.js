/** DESAFIO DE CÓDIGO
 * Faça um programa para calcular um valor de uma viagem.
 *
 * Você terá 5 variáveis, sendo elas:
 * 1 - Preço do Etanol
 * 2 - Preço da Gasolina
 * 3 - O tipo de combustível que está no seu carro
 * 4 - Gasto médio de combustível do carro por KM
 * 5 - Distância em KM da viagem
 *
 * Imprima no console o valor que será gasto para realizar a viagem.
 */

const precoEtanol = 3.45;
const precoGasolina = 5.54;
const tipoCombustivel = "Etanol";
const litroPorKm = 3.5;
const distanciaViagem = 100;

if (tipoCombustivel.toLowerCase() === "gasolina") {
  console.log(
    `O valor total da viagem será de: R$${(
      litroPorKm *
      precoGasolina *
      distanciaViagem
    ).toFixed(2)}`
  );
} else if (tipoCombustivel.toLowerCase() === "etanol") {
  console.log(
    `O valor total da viagem será de: R$${(
      litroPorKm *
      precoEtanol *
      distanciaViagem
    ).toFixed(2)}`
  );
} else {
  console.log("Tipo de combustível inválido");
}
