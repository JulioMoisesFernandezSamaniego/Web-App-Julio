const express = require('express');
const app = express();
const hbs= require('hbs');
//un midelwer es como un callback y siempre se va a ejecutar siempre sin importar el url que se pida creamos el milewer
app.use(express.static(__dirname+ '/public' ));//usamos la libreria de express
//Express hbs engine que sirve para hacer la pagina dinamica
//ya lo usamos para dar cuerpo a la pagina del about-llamados parciales
hbs.registerPartials(__dirname+'/views/parciales');//el dirname es una variable gloval la cual toma el lugar donde esta ubicado y lo concatenamos una ruta
app.set('view engine', 'hbs');
require('./hbs/helpers');

const port=process.env.PORT || 3000;
//usamos los helpers que es una funcio que se dispara cuanto el template lo requiere
/*hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});
//hacemos otro helper
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split(' ');//atrapamos las palabras en un arreglo
    palabras.forEach( (palabra,idx)=>{
        palabras[idx]=palabra.charAt(0).toUpperCase()+palabra.slice(1).toLowerCase();
    })
    return palabras.join(' ');
});*/
//accedemos a la carpeta para extraer de ahi el index.html
app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'JULIO!',
        anio: new Date().getFullYear()//de esa manera generamos el año de forma dinamica
    });//renderisa la pagina y no la envia como abajo
//para decirle al express que las variables existen los mandamos por aqui co un objeto
});
//creamos un patch o direcion para el about
app.get('/about', (req, res)=>{
    res.render('about',{
        anio: new Date().getFullYear()
    });
});
/*app.get('/',(req,res)=>{//remplazado funcion por funcion de flecha
    //res.send('Hola Mundo')
    let salida={
        nombre:'Julio',
        edad:17,
        url:req.url
    };
    res.send(salida);//ya no combertimos el objeto a json ya que en express lo hace por nosostros
});*/
//para que solo ingrese por una url y no por varios se lo especificamos, como aqui solo ingresa por la pleca
//si queremos que ingrese como la anterior por varias url las configuramos
//el anterior ingresaba por barios url xk estaba escuchando y respondiendo lo que sea en el puerto 8080
/*app.get('/data',(req,res)=>{
    let salida={
        nombre:'Moises',
        edad:17,
        url:req.url
    };
    res.send(salida);//ya no combertimos el objeto a json ya que en express lo hace por nosostros
})*/


app.listen(port,()=>{
    console.log(`Escuchando las peticiones del puerto ${port}`);
});//esto tambien recibe un callback y lo usamos para disparar el mensaje