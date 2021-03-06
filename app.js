require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT;


// handlebars

app.set ('view engine', 'hbs');
// PROBANDO P CONECTAR
app.set('views', path.join(__dirname,'views'));



// cont estatico
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
hbs.registerPartials(__dirname+'/views/partials')

// Conexión a la base de datos:
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'genero_david'
})
conn.connect((err) => {
  if(err) throw err
  console.log('Conexion establecida...')
});

app.get("/productos", (req, res) => {
  let sql = "SELECT * FROM productos";
  let query = conn.query(sql, (err, results) => {
     if (err) throw err;
     res.render("productos", {
        results: results,
     });
    //  res.send(results);
  });
});

app.get('/', function(req, res) {
  res.render("home")
});

app.get('/home', function(req, res) {
  res.render("home")
});

app.get("/contacto", (req, res)=>{
  res.render("contacto");
});

app.get("/quienessomos", (req, res)=>{
  res.render("quienessomos");
});


app.get('/publicaciones', function(req, res) {
  res.render("publicaciones")
}); 

app.get('/pecan', function(req, res) {
  res.render("pecan")
}); 

app.get('/productos', function(req, res) {
  res.render("productos")
}); 






// routes
app.get('/', (req, res)=>{
  let sql = "SELECT * FROM productos"
  let query = conn.query(sql, (err, results)=>{
      if (err) throw err;
      res.render('../views/productos', {
          results: results
      });
  });
});




// })

// app.get('/contacto', (req, res) => {
//     res.sendFile(__dirname+"/public/contacto.html");
//   })
//   app.get('/tienda', (req, res) => {
//     res.sendFile(__dirname+"/public/tienda.html");
//   })  

  // app.get('*', (req, res) => {
  //   res.send('404')
  // })

  // server listening
// app.listen(port, () => {console.log(`Usando el puerto http://localhost:${port}`)})

app.listen(8085, () =>{
   console.log('Server is running at port 8085');
});




