const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async function(event, context) {
  const response = await ((await fetch('https://api.c1jvi8hu9a-vsfspzooa1-d1-public.model-t.cc.commerce.ondemand.com/occ/v2/electronics/products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=dct&pageSize=20&currentPage=0&lang=en&curr=USD')).json());

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify(response)
  }
}
