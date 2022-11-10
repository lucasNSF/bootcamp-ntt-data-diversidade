/** DESAFIO DE CÓDIGO
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 * e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo
 * adequado.
 *
 * Código Condição de Pagamento:
 * - À vista no débito, recebe 10% de desconto
 * - À vista no dinheiro ou PIX, recebe 15% de desconto
 * - Em 2x, preço normal de etiqueta sem juros
 * - Acima de 2x, preço normal da etiqueta mais juros de 10%
 */

const tipoPagamento = "QR code";
const precoProduto = 99.9;
let valorTotal;

if (tipoPagamento.toLowerCase() === "debito") {
  valorTotal = precoProduto - precoProduto * 0.1;
} else if (
  tipoPagamento.toLowerCase() === "dinheiro" ||
  tipoPagamento.toLowerCase() === "pix"
) {
  valorTotal = precoProduto - precoProduto * 0.15;
} else if (tipoPagamento.toLowerCase() === "credito") {
  const parcela = 4;
  valorTotal = parcela <= 2 ? precoProduto : precoProduto + precoProduto * 0.1;
}

if (valorTotal) {
  console.log("Preço a pagar pelo produto: R$" + valorTotal.toFixed(2));
} else {
  console.log("Tipo de pagamento escolhido não disponível");
}
