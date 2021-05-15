# 1 - deletando dados

db.books.deleteOne({_id: 20})

# 2 - deleter mais de um item

 db.books.deleteMany({categories: "Java"})
