const axios = require('axios');

console.log(`Ubicación ingresada: ${argv.direccion}`);
const encodedUrl = encodeURI(argv.direccion);

console.log(encodedUrl);

var instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: { 'X-RapidAPI-Key': 'd998d2fe2emshca1129fb47ef28dp1e778ajsn20e6f6866009' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    }).catch(err => {
        console.log('Error: ', err);
    });