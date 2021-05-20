# 1 - importar o banco

mongoimport city_inspections.json -d inspectionsData -c inspections

# 2 - criando indice

db.inspections.createIndex({ certificate_number: 1 })

db.inspections.find({certificate_number: 3030353})

# 3 - index em campo de embeded document

db.inspections.createIndex({ "address.city": 1 })

# 4 - chegando indexes das collections

db.inspections.getIndexes()

# 5 - listar indexes de banco

db.getCollectionNames().forEach(function(collection) {
   indexes = db[collection].getIndexes();
   print("Índices de " + collection + ":");
   printjson(indexes);
});

# 6 - remover indices

db.inspections.dropIndex({ certificate_number: 1 })

# 7 - remover todos os index

db.inspections.dropIndexes()

# 8 - explain

db.inspections.find({certificate_number: 3030353}).explain()

db.inspections.createIndex({ certificate_number: 1 })

db.inspections.find({certificate_number: 3030353}).explain()

# 9 - indices compostos

 db.inspections.createIndex({ certificate_number: 1, date: 1 })


# 10 - indices de texto

db.inspections.createIndex({ business_name: "text" })

db.inspections.find({ $text: { $search: "HOT DOG" } })

db.inspections.find({ $text: { $search: "HOT DOG" } }).explain()