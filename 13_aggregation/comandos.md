# 1 - bucket

db.books.aggregate([
  {
    $bucket: {
      groupBy: "$pageCount",
      boundaries: [100, 200, 300, 400, 500, 600, 700],
      default: "OTHERS",
      output: {
        "count": {$sum: 1}
      }
    }
  }
])

# 2 - bucketauto

db.books.aggregate([
  {
    $bucketAuto: {
      groupBy: "$categories",
      buckets: 3
    }
  }
])

# 3 - collStats

db.books.aggregate( [ { $collStats: { queryExecStats: { }, count: { } } } ] ).pretty()

# 4 - sort

db.books.aggregate([
  { $sort: { pageCount: -1 } }
]).pretty()

# 5 - limit

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $limit : 3 }
]).pretty();

# 6 - match

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { authors: "Gavin King"}},
  { $limit : 3 }
]).pretty();


# 7 - out

db.books.aggregate([
  { $match: { categories: "Java", pageCount: { $gt: 800 }}},
  { $limit : 5 },
  { $out: "bigjavabooks" }
]).pretty();

db.bigjavabooks.find().pretty()

# 8 - project

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { authors: "Gavin King"}},
  { $limit : 3 },
  { $project: { title: 1 } }
]).pretty();

# 9 - sample

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { categories: "Java" }},
  { $project: { title: 1 } },
  { $sample: { size: 10 } }
]).pretty();

# 10 - skip

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { categories: "Java" }},
  { $project: { title: 1 } }
]).pretty();

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { categories: "Java" }},
  { $project: { title: 1 } },
  { $skip: 5 }
]).pretty();

# 10.5 - unwind

db.books.aggregate( [ 
  { $unwind : "$categories" },
  { $project: { categories: 1 } }
] )

# 11 - sortByCount

db.books.aggregate( [ { $unwind: "$categories" },  { $sortByCount: "$categories" } ] )

# 12 - unset

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { categories: "PowerBuilder" }},
  { $unset: "_id" }
]).pretty();

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { categories: "PowerBuilder" }},
  { $unset: ["_id", "status"] }
]).pretty();

# 13 - count

db.books.aggregate([
  { $sort: { pageCount: -1 } },
  { $match: { categories: "Java" }},
  { $project: { title: 1 } },
  { $count: "Contagem" }
]).pretty();

