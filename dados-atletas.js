class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade === 12 || this.idade === 13) {
      return "Juvenil";
    } else if (this.idade === 14 || this.idade === 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);

    notasOrdenadas.shift();
    notasOrdenadas.pop();

    let soma = notasOrdenadas.reduce((a, b) => a + b, 0);
    return soma / notasOrdenadas.length;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

const atleta2 = new Atleta(
  "Mariana Silva",
  14,
  55,
  1.62,
  [8.5, 9.2, 7.8, 8.9, 9.0]
);

const atleta3 = new Atleta(
  "Bruno Rocha",
  11,
  40,
  1.45,
  [9.5, 8.7, 9.0, 9.8, 7.9]
);

const atleta4 = new Atleta("Ana Torres", 17, 60, 1.68, [10, 9.5, 9.7, 10, 9.3]);

const atleta5 = new Atleta(
  "Rafael Mendes",
  32,
  82,
  1.8,
  [7.5, 8.0, 7.8, 7.9, 8.2]
);

const listaAtletas = [atleta2, atleta3, atleta4, atleta5];

listaAtletas.forEach((a) => {
  console.log("\n---------------------------");
  console.log(`Nome: ${a.obtemNomeAtleta()}`);
  console.log(`Idade: ${a.obtemIdadeAtleta()}`);
  console.log(`Peso: ${a.obtemPesoAtleta()}`);
  console.log(`Altura: ${a.obtemAlturaAtleta()}`);
  console.log(`Notas: ${a.obtemNotasAtleta()}`);
  console.log(`Categoria: ${a.obtemCategoria()}`);
  console.log(`IMC: ${a.obtemIMC()}`);
  console.log(`Média válida: ${a.obtemMediaValida()}`);
});
