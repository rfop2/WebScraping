const request = require('request');
const cheerio = require('cheerio');

request('http://www.b3.com.br/pt_br/market-data-e-indices/servicos-de-dados/market-data/cotacoes/' , (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const divGraficoMaiores = $('.divGraficoMaiores');

        console.log(divGraficoMaiores);
        
       
    }
});