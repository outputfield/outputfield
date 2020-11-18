const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '8gmctb9h',
  dataset: 'production',
  //token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  token: '',
  useCdn: true // `false` if you want to ensure fresh data
});

module.exports = client;
