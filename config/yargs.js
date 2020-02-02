const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprimer la tabla que quieras', opts)
    .command('crear', 'Pon un limite ', opts)
    .help()
    .argv;
module.exports = {
    argv
}