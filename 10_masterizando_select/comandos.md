# 1 - query embedded docs

use masterselect

db.pessoas.insertMany([
  {
    nome: "Matheus",
    caracteristicas: {
      peso: "80kg",
      altura: "1.80m",
      cor_dos_olhos: "verdes",
      idade: 30,
    }
  },
  {
    nome: "Pedro",
    caracteristicas: {
      peso: "92kg",
      altura: "1.65m",
      cor_dos_olhos: "castanhos",
      idade: 25,
    }
  },
  {
    nome: "Maria",
    caracteristicas: {
      peso: "68kg",
      altura: "1.92m",
      cor_dos_olhos: "azuis",
      idade: 33,
    }
  },
  {
    nome: "Carla",
    caracteristicas: {
      peso: "72kg",
      altura: "1.72m",
      cor_dos_olhos: "castanhos",
      idade: 19,
    }
  },
])

db.pessoas.find()

db.pessoas.find({"caracteristicas.cor_dos_olhos": "castanhos"}).pretty()

# EXERCICIO 15

db.pessoas.find({"caracteristicas.peso": {$in: ["80kg", "92kg"]}, "caracteristicas.idade": {$gt: 20}})

# 2 - embedded com op

db.pessoas.find({"caracteristicas.idade": { $gt: 30 }}).pretty()

# 3 - selecao de arrays

db.alunos.insertMany([
  {
    nome: "Matheus",
    matematica: [8, 7, 10, 8]
  },
  {
    nome: "Pedro",
    matematica: [8, 8, 9, 7]
  },
  {
    nome: "Maria",
    matematica: [6, 4, 10, 9]
  },
])

db.alunos.find({matematica: 6})

db.alunos.find({matematica: [8, 8, 9, 7]})

# 4 - alguns valores no array

db.alunos.find({matematica: {$all: [8, 7]}})

# 5 - array pelo tamanho

db.alunos.find({matematica: {$size: 4}})


# 6 - array de documents

db.produtos.insertMany([
  {
    nome: "Camisa",
    variacoes: [
      {
        cor: "Vermelha",
        tamanho: "P",
        qtd: 10
      },
      {
        cor: "Azul",
        tamanho: "M",
        qtd: 25
      },
            {
        cor: "Verde",
        tamanho: "G",
        qtd: 48
      },
    ]
  },
  {
    nome: "Calça",
    variacoes: [
      {
        cor: "Preta",
        tamanho: 42,
        qtd: 12
      },
      {
        cor: "Cinza",
        tamanho: 46,
        qtd: 20
      },
      {
        cor: "Azul",
        tamanho: 46,
        qtd: 32
      }
    ]
  }
])

db.produtos.find({"variacoes": { cor: "Verde", tamanho: "G", qtd: 48 }})

# 7 - operadores com documents

db.produtos.find({ "variacoes.qtd": { $gt: 30 }})

# 8 - elemMatch

db.produtos.find({"variacoes": { $elemMatch: {tamanho: { $gt: 40 }, cor: "Azul"}}}).pretty()

# EXERCICIO 16

db.produtos.find({"variacoes": { $elemMatch: { tamanho: { $lt: 44 }, qtd: { $gte: 30 }}}}).pretty()

# 9 - dados específicos

db.pessoas.find({}, {nome: 1, idade: 1})

# 10 - sem id

db.pessoas.find({}, {_id: 0, nome: 1, idade: 1})

# EXERCICIO 17

db.pessoas.find({}, {_id: 0, nome: 0})

# 11 - trazer apenas alguns campos embedded

db.pessoas.find({}, {nome: 1, "caracteristicas.peso": 1})

# 12 - suprimir campos de embedded

db.pessoas.find({}, {"caracteristicas.cor_dos_olhos": 0})

# TAREFA 05

db.alunos.updateOne({ nome: "Matheus"}, {$set: {"quimica": [10, 9, 8, 7]}})
db.alunos.updateOne({ nome: "Pedro"}, {$set: {"quimica": [5, 9, 6, 7]}})
db.alunos.updateOne({ nome: "Maria"}, {$set: {"quimica": [8, 8, 8, 7]}})

db.alunos.insertOne({ nome: "Joaquim", matematica: [10, 9, 8, 7], quimica: [5, 6]})

db.alunos.find({ quimica: {$all: [10]} })

db.alunos.find({ quimica: {$size: 2} })

db.alunos.updateOne({ quimica: {$size: 2} }, {$set: {falta_provas: true}})

db.alunos.find().pretty()