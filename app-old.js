//usamos el web server que crea un servidor por nosotros y ya biene por default el el propio node

//llamamos a la libreria
const http = require('http');

//creamos al servidor
http.createServer((req, res)=>{//recibe un callback con los parametros las solicitudes y las respuestas
    //ahora le pasamos un objeto json
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida ={
        nombre: 'Julio',
        edad:17,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    /*res.write('Hola Mundo');*/
        res.end();
    })//configuramos el puerto al que va a eschuchar el serber 
    .listen(8080);

console.log('Escuchando el puerto 8080');
