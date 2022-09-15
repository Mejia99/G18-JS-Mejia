const fs= require('fs');

const path = './';
const fileName='mi-file.txt';
const contentFile='Estoy aprendiendo algo nuevo';
const destination = `${path}${fileName}`;

fs.writeFile(destination, contentFile, (err) =>{
    if (err) {
        throw err;
    }else{
        console.log('archivo creado con exito! ;)');
    }
});
