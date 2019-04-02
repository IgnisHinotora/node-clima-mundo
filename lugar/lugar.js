const axios = require('axios');


const getLugarLatLng = async(dir) => { // se agrega Async a la primera version de ésta función

    const encodedUrl = encodeURI(dir);

    console.log(encodedUrl);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'd998d2fe2emshca1129fb47ef28dp1e778ajsn20e6f6866009' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;



    /*instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]);
        }).catch(err => {
            console.log('Error: ', err);
        });*/

    return {
        direccion,
        lat,
        lng

    }
}

module.exports = {
    getLugarLatLng

}

//console.log(`Ubicación ingresada: ${argv.direccion}`);