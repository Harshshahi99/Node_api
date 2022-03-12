const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://spatharia276:rajput276@cluster0.ppcj1.mongodb.net/test";
    const client = new MongoClient(uri);
     try {
        await client.connect();

         await findOneListingByName(client, "harsh");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}
main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("database").collection("issues").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

   
   console.log(`New listing created with the following id: '${result.insertedId}`);
   async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
        });
    
}



