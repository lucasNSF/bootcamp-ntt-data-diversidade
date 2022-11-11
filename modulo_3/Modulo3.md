# Primeiras Páginas Interativas com Javascript

## Conteúdos deste Módulo 🔎

- [Primeiros Passos com Javascript](#primeiros-passos-com-javascript)
  - [Variáveis e Operadores](#variáveis-e-operadores)
  - [Estruturas Condicionais e Operadores Lógicos](#estruturas-condicionais-e-operadores-lógicos)
- [Conhecendo Funções Javascript](#conhecendo-funções)
- [Criando Objetos e Classes](#criando-objetos-e-classes)

<br>

## Primeiros Passos com Javascript

<br>

### **Variáveis e Operadores**

É possível declarar variáveis utilizando 3 palavras reservadas:

- `var` (antigo)
- `let`
- `const` (utilizado para criar constantes)

As variáveis são utilizadas para armazenar diferentes tipos de valores. Em relação aos operadores aritméticos, existem deles:

1. Operador de Soma (+)
2. Operador de Subtração (-)
3. Operador de Multiplicação (\*)
4. Operador de Divisão (/)
5. Operador de Módulo - Resto da Divisão (%)
6. Operador de Potência (\*\*)

[Veja o exemplo prático de variáveis e operadores!](./variaveis-operadores.js)

<br>

### **Estruturas Condicionais e Operadores Lógicos**

Estruturas condicionais validam um determinado trecho de código retornando valores lógicos para o seu resultado (_TRUE_ ou _FALSE_). As estruturas condicionais e operadores lógicos aceitos são:

1. Comparador de Igualdade (==)

- verifica se o valor do conteúdo de uma variável é igual a outra.

2. Comparador de Igualdade Estrita (===)

- verifica se o valor do conteúdo e o tipo de dado entre as variáveis são iguais.

3. Negação (!)
4. Diferença (!=)
5. Diferença Estrita (!==)
6. Menor que (<)
7. Maior que (>)
8. Menor ou igual que (<=)
9. Maior ou igual que (>=)
10. Se (`if`)
11. Senão (`else`)

[Veja o exemplo prático de estruturas condicionais e operadores lógicos](./condicionais-logicos.js)

[Veja também um desafio prático!](./lista_exercicios/)

<br>

### **Conhecendo Funções**

Funções são pequenos trechos de códigos independentes que podem compor o fluxo do programa principal. Desta forma tornando o código mais enxuto e reutilizável.

Para criar funções podemos utilizar a palavra reservada `function` ou construindo como _arrow function_.

```js
// Function
function somaDoisNumeros(a, b) {
  return a + b;
}

// Arrow function
const somaDoisNumeros = (a, b) => a + b;
```

[Veja o exemplo prático de funções!](./funcoes.js)

<br>

### **Criando Objetos e Classes**

Classes são moldes para se armazenar um tipo de estrutura padronizada para o seu sistema. A partir de uma classe pode-se instanciar objetos, que é a representação física de sua classe.

[Veja o exemplo prático de objetos e classes!](./classes-objetos.js)

<br>
