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
