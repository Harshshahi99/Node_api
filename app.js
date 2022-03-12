const {MongoClient} = require('mongodb');

 
async function main()
{
const uri = "mongodb+srv://spatharia276:rajput276@cluster0.ppcj1.mongodb.net/test";

const client = new MongoClient(uri);

try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await  listDatabases(client);
    await findOneListingByName(client, "9964795421");

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
}
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOneListingByName(client, nameofListing) {
    const result = await client.db("database").collection("issues").findOne({ name: nameofListing });
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameofListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameofListing}'`);
    }
}

main().catch(console.error);