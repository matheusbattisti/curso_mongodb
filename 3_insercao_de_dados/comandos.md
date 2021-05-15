# 1 - inserir dados

db.collection.insertOne({nome: "Matheus"})

# exercicio 5

db.provas.insertOne({nome: "Matheus", notas: [10, 6, 8]})
db.provas.insertOne({nome: "Maria", notas: [4, 9, 10]})

# 2 - não há relação entre dados

db.collection.insertOne({preco: 10000})

db.collection.insertOne({notas: [10, 8, 5]})

db.collection.insertOne({disponivel: false})

db.collection.find()

# 3 - insertmany

db.collection.insertMany([{nome: "Josias", idade: 60}, {nome: "Isabel", idade: 32}])

# 4 - insert

db.collection.insert({nome: "João", idade: 40})

db.collection.insert([{nome: "Pedro"}, {nome: "Maria"}])

# 5 - proprio id

db.collection.insert({_id: "meuidunico", nome: "Zeca"})

# 6 - write concern

db.collection.insertMany([
  {nome: "Osvaldo", idade: 44}, {nome: "Simone", idade: 22}
], {w: "majority", wtimeout: 200})


# 7 - tarefa 2

use dadosDeCarros

db.carros.insertMany([
  {_id: "c01", marca: "Ferrari", modelo: "f40", ano_fabricacao: 2012, km: 40000},
  {_id: "c02", marca: "Fiat", modelo: "Uno", ano_fabricacao: 2008, km: 150000},
  {_id: "c03", marca: "VW", modelo: "Polo", ano_fabricacao: 2019, km: 15000},
  {_id: "c04", marca: "GM", modelo: "Onix", ano_fabricacao: 2018, km: 43000}
])

db.carros.find().pretty()