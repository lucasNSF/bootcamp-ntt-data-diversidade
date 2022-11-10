// Criando uma apresentação pessoal utilizando funções :)

const falarNome = (nome) => console.log(`Olá! Meu nome é ${nome}!`);

const verificarIdade = (idade) => {
  const condicaoIdade = idade >= 18 ? "maior" : "menor";
  console.log(`Tenho ${idade} anos, logo sou ${condicaoIdade} de idade.`);
};

function dizerGostos(...gostos) {
  console.log("Gosto de:");
  gostos.forEach((gosto) => {
    console.log(gosto + ".");
  });
}

falarNome("Lucas");
verificarIdade(20);
dizerGostos("programar", "jogar", "ouvir música", "desenhar");
console.log(":)");
