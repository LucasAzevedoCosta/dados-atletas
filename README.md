# 🏅 Projeto de Certificação 2 – Dados dos Atletas

Curso **DEVstart**

Este projeto foi desenvolvido como parte da certificação do curso DEVstart, com o objetivo de criar uma aplicação em **JavaScript** capaz de receber informações de atletas, calcular indicadores importantes e exibir seus dados formatados.

---

## 📌 Objetivo do Projeto

Criar uma classe `Atleta` contendo atributos e métodos que representem e processem informações dos atletas, incluindo:

* Nome
* Idade
* Peso
* Altura
* Notas obtidas em avaliações

A aplicação deve calcular:

* **Categoria do atleta**
* **IMC**
* **Média válida das notas** (desconsiderando a maior e menor nota)

---

## 🧩 Especificações da Classe Atleta

### **Atributos**

* `nome`
* `idade`
* `peso`
* `altura`
* `notas`

### **Métodos**

| Método                 | Descrição                                    |
| ---------------------- | -------------------------------------------- |
| `calculaCategoria()`   | Classifica o atleta conforme a idade         |
| `calculaIMC()`         | Calcula o IMC com a fórmula peso / (altura²) |
| `calculaMediaValida()` | Calcula a média removendo maior e menor nota |
| `obtemNomeAtleta()`    | Retorna o nome                               |
| `obtemIdadeAtleta()`   | Retorna a idade                              |
| `obtemPesoAtleta()`    | Retorna o peso                               |
| `obtemAlturaAtleta()`  | Retorna a altura                             |
| `obtemNotasAtleta()`   | Retorna todas as notas                       |
| `obtemCategoria()`     | Retorna a categoria                          |
| `obtemIMC()`           | Retorna o IMC                                |
| `obtemMediaValida()`   | Retorna a média válida                       |

---

## 🧮 Regras Utilizadas

### **1. Categoria por idade**

| Idade   | Categoria     |
| ------- | ------------- |
| 9 a 11  | Infantil      |
| 12 e 13 | Juvenil       |
| 14 e 15 | Intermediário |
| 16 a 30 | Adulto        |
| Outros  | Sem categoria |

---

### **2. Cálculo do IMC**

```
IMC = peso / (altura * altura)
```

---

### **3. Média Válida**

1. Ordenar as notas
2. Remover a maior e a menor nota
3. Calcular a média das restantes

---

## ▶️ Como Executar o Projeto

1. Clone este repositório:

```
git clone https://github.com/seuusuario/dados-atletas
```

2. Entre na pasta do projeto:

```
cd dados-atletas
```

3. Execute o arquivo em Node.js:

```
node dados-atletas.js
```

4. Veja a saída no console.

---

## 📌 Exemplo de Saída

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333334
```

---

## 🛠 Tecnologias Utilizadas

* JavaScript
* Node.js
