const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfoClima = () {




}


/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);

clima.getClima(46.450001, -63.380001)
    .then(console.log)
    .catch(console.log);
//argv.direccion*/