# 1 - importar banco

mongoimport books.json -d booksCollection -c books

# 2 - todos os dados

db.books.find()

db.books.find().pretty

# 3 - dado específico

db.books.find({pageCount: 362})

# EXERCICIO 7

db.books.find({ title: "MongoDB in Action" })

db.books.find({ authors: "Jason R. Weiss" })

# 4 - operador in

db.books.find({categories: {$in: ["Java", "Internet"]}}).pretty()

# 5 - múltiplas condições

db.books.find({ pageCount: 592, _id: 63 }).pretty()

# 6 - maior que

db.books.find({ pageCount: { $gt: 450 }}).pretty()

# EXERCICIO 8

db.books.find({ pageCount: {$gt: 800} }).pretty()
db.books.find({ _id: {$gt: 122} }).pretty()

# 7 - menor que

db.books.find({ pageCount: { $lt: 120 }}).pretty()

# 8 - or

db.books.find({ $or: [{pageCount: {$gt: 500}, _id: {$lt: 5}}]}).pretty()

# and e or

db.books.find({ status: "PUBLISH", $or: [{pageCount: 500}, {authors: "Robi Sen"}] }).pretty()


# 9 - count

db.books.find({ pageCount: {$gt: 600 }}).count()

# TAREFA 03

db.books.find({ categories: "Java" }).pretty()

db.books.find({ pageCount: { $lt: 100 } }).pretty()

db.books.find({ categories: "Microsoft", pageCount: { $gt: 300 } }).pretty()

db.books.find({ categories: "Web Development" }).count()

db.books.find({ $or: [{ authors: "Bret Updegraff" }, { categories: "Mobile" }] }).pretty()