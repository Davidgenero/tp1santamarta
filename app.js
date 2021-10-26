const express = require('express');
const hbs = require ('hbs');

require('dotenv').config();

const app = express();
const port = process.env.PORT;


// handlebars

app.set ('view engine', 'hbs')



// cont estatico
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render("home",{
      nombre:'Cosme Fulanito',
      titulo:'Travel'
  }
)});

  app.get('/publicaciones', function(req, res) {
    res.render("publicaciones",{
        nombre:'Cosme Fulanito',
        titulo:'Travel'
    }
  )}); 


// })

// app.get('/contacto', (req, res) => {
//     res.sendFile(__dirname+"/public/contacto.html");
//   })
//   app.get('/tienda', (req, res) => {
//     res.sendFile(__dirname+"/public/tienda.html");
//   })  

//   app.get('*', (req, res) => {
//     res.send('404')
//   })

app.listen(port, () => {console.log(`Usando el puerto http://localhost:${port}`)})