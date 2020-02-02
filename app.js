const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors')
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        crearArchivo(argv.base).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err);
        })
        break
    default:
        break
}