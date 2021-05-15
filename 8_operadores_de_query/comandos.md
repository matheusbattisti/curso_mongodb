# 1 - importar banco

mongoimport restaurant.json -d restaurantsData -c restaurants

# 2 - op $eq

db.restaurants.findOne({ rating: {$eq: 5} })

db.restaurants.findOne({ rating: 5 })

# 3 - $gt e $gte

db.restaurants.findOne({ rating: {$gte: 4} })

# 4 - $lt e $lte

db.restaurants.findOne({rating: {$lt: 2}})

# EXERCICIO 13

db.restaurants.find({type_of_food: "Breakfast", rating: {$gte: 3}})

# 5 - $in

 db.find({type_of_food: {$in: ["Pizza", "Chinese"]}})

# 6 - $nin

db.restaurants.find({postcode: {$ne: ["0JH", "0BE", "0HG"]}})

# 7 - $ne

db.restaurants.findOne({ rating: {$ne: 5} })

# 8 - $exists

db.restaurants.updateMany({rating: 5}, {$set: {high_score: true }})

db.restaurants.find({high_score: {$exists: true}})

# EXERCICIO 14

db.restaurants.updateMany({rating: {$lte: 2}}, {$set: {bad_restaurant: true }})

db.restaurants.find({bad_restaurant: {$exists: true}})

# 9 - $text

db.restaurants.createIndex( { name: "text" } )

db.restaurants.find({$text: {$search: "pizza"}}).pretty()