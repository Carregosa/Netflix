module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "The Matrix", year: 1999 },
        { id: 3, title: "Interstellar", year: 2014 }
    ];

    context.res = {
        status: 200,
        body: movies
    };
};

const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint, key });
const database = client.database("meuBancoDeDados");
const container = database.container("meuContainer");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const { resources: movies } = await container.items.query("SELECT * from c").fetchAll();

    context.res = {
        status: 200,
        body: movies
    };
};
