# exercicio 3

db.salarios.insertOne({nome: "Matheus", salario: 4000})
db.salarios.insertOne({nome: "João", salario: 6500})

db.salarios.find()

show collections

# collection implicita

db.createCollection("minhacollection", {capped: true, size: 1000 max: 50})
// capped é necessario, 1000 bytes, 50 registros

# 1 - importar dados

mongoimport books.json -d booksData -c books

# 2- exportar dados 

mongoexport -c books -d booksData -o booksExample.json

# 3 - exportar mtas collections - mongodump

use meuBanco

db.pessoas.insertOne({nome: "Matheus", idade: 30})

db.enderecos.insertOne({rua: "Rua teste", numero: "123c"})

mongodump -d meuBanco -o meuBanco

# 4 - importar arquivos do mongodump



# 5 - tarefa 1

use novoBanco

db.dados.insertOne({prova_numero: 1, nota: 10})

db.dados.insertOne({prova_numero: 2, nota: 8})

db.dados.insertOne({prova_numero: 3, nota: 7})

db.dados.find({})

mongoexport -c dados -d novoBanco -o novoBanco.json

mongoimport novoBanco.json -d novoBancoDois -c novosdados