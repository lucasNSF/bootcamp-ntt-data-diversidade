/** DESAFIO DE CÓDIGO
 * Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule
 * e imprima a sua média e sua classificação conforme a tabela abaixo:
 *
 * - Média menor que 5, reprovação.
 * - Média entre 5 e 7, recuperação.
 * - Média acima de 7, aprovação.
 */

const nota1 = 5.5;
const nota2 = 6;
const nota3 = 8.5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log(`Você foi reprovado! Sua média = ${media.toFixed(1)}`);
} else if (media >= 5 && media <= 7) {
  console.log(`Você está em recuperação! Sua média = ${media.toFixed(1)}`);
} else {
  console.log(`Você foi aprovado! Sua média = ${media.toFixed(1)}`);
}
