const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    const json = JSON.stringify(data);

    return {
      statusCode: 200,
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
