# 1 - textos

use tipos

db.strings.insertOne({nome: "Matheus"})
db.strings.insertOne({rua: 'Rua teste'})

# 2 - typeof

const dado = db.strings.findOne()

typeof dado.nome

# 3 - arrays

db.arrays.insertOne({carros: ["BMW", "Ferrari", "Fusca"]})

# 4 - datas

db.dates.insertOne({data: new Date()})

# 5 - documents

db.documents.insertOne({nome: "Matheus", desc: {profissao: "Programador", hobbies: ["Estudar", "Ler", "Caminhar"]}})

# 6 - boolean

db.bools.insertOne({nome: "Matheus", trabalhando: true})

# 7 - numeros

db.numbers.insertOne({double: 12.2, outro_double: 50, inteiro: NumberInt("5")})

