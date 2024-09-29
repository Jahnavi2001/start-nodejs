const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://jahnavi_vuyyuru:rBfFNENzy9tq1c6M@learnnode.7iknf.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // --------- Insert One --------------
  // const data = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   city: "Mumbai",
  //   phoneNumber: "7838636846",
  // };
  // const insertOneResult = await collection.insertOne(data)
  // console.log("insertOneResult:", insertOneResult)

  // -------- Insert Many Result -----------
  // const data1 = {
  //   firstName: 'James',
  //   lastName: 'Bard',
  //   city: 'Delhi',
  //   phoneNumber: '5628956225'
  // }
  // const data2 = {
  //   firstName: 'Bean',
  //   lastName: 'Mr',
  //   city: 'Chennai',
  //   phoneNumber: '7683278333'
  // }
  // const insertManyResult = await collection.insertMany([data1, data2])
  // console.log("Inserted Documents ==>", insertManyResult)

  // ---------- Count all Documents ----------------
  const countResult = await collection.countDocuments({});
  console.log("Count Documents ==>", countResult);

  // --------- Count all the documents with a filter of name: Aparna -----------
  const findFilterNameCountResult = await collection.countDocuments({
    firstName: "Aparna",
  });
  console.log("Found Filter Name Result ==>", findFilterNameCountResult);

  // ----------- Find Result -----------
  const findResult = await collection.find({}).toArray();
  console.log("Found Documents ==>", findResult);

  // ----------- Find all the documents with a filter of name: Aparna --------------
  const findFilterNameResult = await collection
    .find({ firstName: "Aparna" })
    .toArray();
  console.log("Found Filter Name Result ==>", findFilterNameResult);

  // ----------- Update lastname of one record -------------------
  // const updateOneResult = await collection.updateOne(
  //   { firstName: "Jahnavi" },
  //   { $set: { lastName: "Vuyyuru Update" } }
  // );
  // console.log("updateOneResult:", updateOneResult);

  // ----------- Update lastname of multiple records -------------------
  // const updateManyResult = await collection.updateMany(
  //   { firstName: "Aparna" },
  //   { $set: { lastName: "Vuyyuru Update Many" } }
  // );
  // console.log("updateManyResult:", updateManyResult);

  // ---------- Delete one record ----------------
  // const deleteOneResult = await collection.deleteOne({firstName: 'James'})
  // console.log('deleteOneResult', deleteOneResult)

  // ---------- Delete Many Records ---------------
  // const deleteManyResult = await collection.deleteMany({firstName: 'Aparna'})
  // console.log('deleteManyResult', deleteManyResult)



  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES
// 1. Go to a mongodb website
// 2. Create a free M0 cluster
// 3. Create a user
// 4. Get the connection string
// 5. Install Mongo DB compass
// 6. Create a Database
// 7. Install mongodb package
// 8. Create a connection from code
// 9. Documents CRUD - Create, Read, Update, Delete
