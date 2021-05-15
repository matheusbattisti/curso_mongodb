# 1 - inc

db.blog.insertMany([
  {
    author: "Matheus Battisti",
    postCount: 10,
    likesReceived: 150,
    categories: ["PHP", "JavaScript", "MongoDB"],
    active: true,
    maxPosts: 100
  },
  {
    author: "Jhon Doe",
    postCount: 219,
    likesReceived: 12890,
    categories: ["Java", "C#", "C"],
    active: false,
    maxPosts: 100
  },
  {
    author: "Maria Marin",
    postCount: 8,
    likesReceived: 12,
    categories: ["Linux", "DevOps", "Docker"],
    active: true,
    maxPosts: 100
  },
])

db.blog.updateOne({author: "Matheus Battisti"}, {$inc: {postCount: 2}})

db.blog.updateOne({author: "Matheus Battisti"}, {$inc: {postCount: -5}})

# 2 - min

db.blog.insertOne({ author: "Maicon Santos", postCount: 50, likesReceived: 50 })

 db.blog.updateOne({ author: "Maicon Santos"}, {$min: { postCount: 0, likesReceived: 0}})

# 3 - max

db.blog.updateOne({ author: "Matheus Battisti" }, {$max: {maxPosts: 250}})

# 4 - mul

 db.blog.updateOne({ author: "Matheus Battisti" }, {$mul: {maxPosts: 2}})

# 5 - rename

db.blog.updateMany({}, {$rename: {author: "author_fullname"}})

# 6 - unset

db.blog.updateMany({}, {$unset: {active: ""}})

# 7 - addToSet

db.blog.updateOne({author_fullname: "Matheus Battisti"}, {$addToSet: {categories: { $each: ["PHP", "Vue"]}}})

# 8 - pop

 db.blog.updateOne({author_fullname: "Matheus Battisti"}, {$pop: {categories: -1}})

# 9 - push

db.blog.updateOne({author_fullname: "Matheus Battisti"}, {$push: {categories: "Linux"}})

# 10 - push varios itens

db.blog.updateOne({author_fullname: "Matheus Battisti"}, {$push: {categories: { $each: ["HTML", "CSS"]}}})

# 11 - pullAll

db.blog.updateOne({author_fullname: "Maria Marin"}, {$pullAll: { categories: ["Linux", "Docker"]}})


