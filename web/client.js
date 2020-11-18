const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '8gmctb9h',
  dataset: 'production',
  //token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  token: 'skUtnBgpcNC1trzq771DVI4VrfyF3CDgV5mOS7eeTOhTEDd7j8rtGcBMyBtA3sKpPRVx6Ojy1aZJ5QntZdqWEpyyyGKtMLRMo88bqDF9SEINk8hZ9evsdnZS1IBVcopW8J4HEn9ykkUlUaWL5MnmLOdqoIOPfzHVTnq53PgO1PUDAEkaoDiw',
  useCdn: true // `false` if you want to ensure fresh data
});

module.exports = client;
