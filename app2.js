//API to create documents in database as bson file



const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://spatharia276:rajput276@cluster0.ppcj1.mongodb.net/test";
    const client = new MongoClient(uri);
     try {
        await client.connect();

         await createListing(client,{
            serviceNumber: "9964795421",
            customerName: "harsh",
            createdOn: "2020-01-01",
            createdBy: "harsh",
            modifiedOn: "2020-01-01",
            modifiedBy: "shahi",
            deletedOn: "2020-01-01",
            deletedBy: "shahi",
            isActive: true,
            isDeleted: false,
            stage:1,
            customerPhoneNo: "7905179058",
            customerEmail: "harshvikramshahi@gmail.com",
            desc: "harsh",
      });
       
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}
main().catch(console.error);

async function createListing(client,newListing){
   const result = await client.db("database").collection("issues").insertOne(newListing);

   console.log(`New listing created with the following id: '${result.insertedId}`);
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
        });
    
}

