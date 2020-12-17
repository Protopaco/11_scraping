const request = require('./request.js');
const parser = require('./parser.js');
const store = require('./store.js');
// const store = require('./store.js');

console.log('------------------------------------');
console.log('SCRAPPERR!!!')
console.log('------------------------------------');
const scraper = async () => {

    request()
        .then(document => parser(document))
        .then(products => store(products))
        .then(console.log)

}
scraper();

