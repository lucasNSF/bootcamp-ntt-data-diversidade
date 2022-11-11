// Criando uma classe que representaria uma pessoa na nossa aplicação
class Pessoa {
  // A função construtora sempre é chamada quando um objeto for instanciado
  // a partir desta classe
  constructor(nome, nascimento, cursos) {
    this._nome = nome;
    this._nascimento = nascimento;
    this._cursos = cursos;
  }

  // Métodos da classe

  calcularIdade() {
    const anoUsuario = Number(this._nascimento.split("/")[2]);
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoUsuario;
  }

  getNome() {
    return this._nome;
  }

  getNascimento() {
    return this_nascimento;
  }

  getCursos() {
    return this.cursos;
  }
}

// Criando pessoa a partir da classe
const lucas = new Pessoa("Lucas", "28/08/2002", ["ADS", "Análise de Dados"]);
console.log(`${lucas.getNome()} tem ${lucas.calcularIdade()} anos!`);

// Criando um objeto literal
const carro = {
  _marca: null,
  _modelo: null,
  _cor: null,

  get marca() {
    return this._marca;
  },

  set marca(marca) {
    this._marca = marca;
  },

  get modelo() {
    return this._modelo;
  },

  set modelo(modelo) {
    this._modelo = modelo;
  },

  get cor() {
    return this._cor;
  },

  set cor(cor) {
    this._cor = cor;
  },
};

carro.marca = "BMW"; // Chama automaticamente o setter
carro.cor = "Preta";
carro.modelo = "2022";

// Chama automaticamente o getter
console.log(`
Informações do veículo:
Marca = ${carro.marca}
Modelo = ${carro.modelo}
Cor = ${carro.cor}
`);

// Criando uma função construtora
function Animal(nome) {
  const fazerBarulho = (som) => console.log(som + "!");

  return {
    nome,
    fazerBarulho,
  };
}

const cachorro = Animal("Pegasus"); // const cachorro = new Animal("Pegasus");
cachorro.fazerBarulho("au au au");
