const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `La temperatura en ${direccion} es de ${temp} ° C  `;
    } catch (e) {
        return `No fué posible encontrar el clima para el lugar indicado ${e}`
    }

}


getInfo(argv.direccion).then(resp => {
    console.log(resp);
}).catch(e => {
    console.log('Ocurrió el siguiente error: ', e)
});





/** clima.getClima(location.lat, location.lon)
    .then(console.log)
    .catch(console.log);
    lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);

    
    
    */


//argv.direccion
//getClima(46.450001, -63.380001)