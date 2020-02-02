const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.red);
    }
}
const crearArchivo = (base, limite) => {
    let data = ''
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un numero")
            return
        }
        for (let i = 0; i <= limite; i++) {
            data = data + `${base} * ${i}== ${i*base}\n`
        }
        fs.writeFile(`./multiplicar/tabla_${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`Archivo tabla ${base} creado`)
            }
        })
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}