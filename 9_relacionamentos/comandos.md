# 1 - embedded documents

use relationships

db.embedded.insertOne({
  nome: "Matheus",
  idade: 30,
  endereco: {
    rua: "Rua das flores",
    numero: "1314",
    complemento: "Casa"
  }
})

db.embedded.findOne()

const matheus = db.embedded.findOne()

matheus.endereco.rua

db.embedded.insertOne({
  nome: "João",
  idade: 40,
  enderecos: {
    casa: {
      rua: "Rua das flores",
      numero: "1314",
      complemento: "Casa"
    },
    trabalho: {
      rua: "Rua das árvores",
      numero: "102 C",
      complemento: "Galpão"
    }
  }
})

const joao = db.embedded.findOne({nome: "João"})

joao.enderecos.trabalho.numero

# 2 - one to one

db.pessoas.insertOne({
  nome: "Matheus",
  idade: 30,
  profissao: "Programador"
})

matheus = db.pessoas.findOne()

matheusId = matheus._id

matheusId

db.enderecos.insertOne({
  rua: "Rua das flores",
  numero: "1414",
  complemento: "Casa",
  pessoa_id: matheusId
})

db.enderecos.findOne()

db.enderecos.find({pessoa_id: matheusId})

# 3 - one to many

db.pessoas.insertOne({
  nome: "Gustavo",
  idade: 29,
  profissao: "Gerente"
})

gustavo = db.pessoas.findOne({nome: "Gustavo"})

gustavoId = gustavo._id

db.compras.insertMany([
  {produtos: ["Livro", "Celular"], pessoa_id: matheusId},
  {produtos: ["Mouse", "Teclado"], pessoa_id: matheusId},
  {produtos: ["Agenda"], pessoa_id: matheusId},
  {produtos: ["Barbeador", "Suporte monitor"], pessoa_id: gustavoId},
])

db.compras.find({})

db.compras.find({pessoa_id: matheusId})
db.compras.find({pessoa_id: gustavoId})

# 4 - many to many

db.cursos.insertMany([
  {nome: "PHP avançado"},
  {nome: "JavaScript básico"},
  {nome: "Banco de dados NoSQL"}
])

db.pessoas.insertOne({nome: "Pedro", idade: 40})

db.cursos.find()

const gustavo = db.pessoas.findOne({nome: "Gustavo"})
const matheus = db.pessoas.findOne({nome: "Matheus"})

const php = db.cursos.findOne({nome: "PHP avançado"})
const js = db.cursos.findOne({nome: "JavaScript básico"})

db.curso_pessoa.insertMany([
  {curso_id: php._id, pessoa_id: matheus._id},
  {curso_id: js._id, pessoa_id: matheus._id},
  {curso_id: js._id, pessoa_id: gustavo._id},
])

db.curso_pessoa.find()

# TODOS OS ALUNOS DO CURSO DE JS

const idsAlunos = [];

db.curso_pessoa.find({curso_id: js._id}).forEach(function(aluno) {
  idsAlunos.push(aluno.pessoa_id)
});

idsAlunos

db.pessoas.find({_id: {$in: idsAlunos}})