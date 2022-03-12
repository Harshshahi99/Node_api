//API to fetch/ database

const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://spatharia276:rajput276@cluster0.ppcj1.mongodb.net/test";
    const client = new MongoClient(uri);
     try {
        await client.connect();

        await listDatabases(client);
       
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(` - ${db.name}`)
        });
    
}