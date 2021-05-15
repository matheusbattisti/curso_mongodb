# 1 - atualizar um dado

db.books.updateOne({_id: 314}, { $set: { pageCount: 1000 }})

db.books.findOne({_id: 314}).pretty()

# EXERCICIO 9

db.books.updateOne({_id: 20}, { $set: {title: "Meu primeiro update"} })

db.books.find({_id: 20})

# 2 - atualizar varios dados

db.books.updateMany({categories: "Java"}, { $set: {status: "UNPUBLISHED"} })

db.books.find({categories: "Java"}).pretty()

# 3 - adicionando dados com update

db.books.updateMany({authors: "Vikram Goyal"}, { $set: {downloads: 1000} })

db.books.find({authors: "Vikram Goyal"}).pretty()

# EXERCICIO 10

db.books.updateMany({pageCount: {$gt:500}}, {$set: {bestseller: true}})

db.books.find({pageCount: {$gt: 500}}).pretty()

# 4 - replace

db.books.replaceOne({_id: 120}, {foi: "substituido"})

db.books.findOne({_id: 120})

# 5 - adicionar item a um array

db.books.updateOne({_id: 201}, { $push: {categories: "PHP"}})

db.book.find({_id: 201}).pretty()

# 6 - atualizar todos os itens

db.books.updateMany({}, { $set: {atualizado: true} })

# TAREFA 04

db.books.updateOne({title: "Flex 4 in Action"}, { $set: {status: "OUT OF STOCK"} })

db.books.find({title: "Flex 4 in Action"})

db.books.updateMany({pageCount: {$lt: 100}}, {$set: {short_book: true}})

db.books.find({pageCount: {$lt: 100}})

db.books.updateMany({categories: "Java", pageCount: {$gt: 500}}, {$push: {categories: "Many Pages"}})

db.books.find({categories: "Many Pages"})