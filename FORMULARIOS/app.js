const express = require ("express");
const session = require("express-session");
const hbs = require ("hbs");
const app = express();
const port = 5000;
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/");
// MIDDLEWARES
app.use(express.json());
app.use( express.urlencoded({extended: false}))
app.use(
    session ({
        secret:"122456htelshstbk",
        resave: true,
        saveUninitialized: true,
    })
);
app.get("/", (req, res)=>{
    res.render("home");
});



app.post("/publicaciones", (req, res) =>{
    req.session.myvariable = req.body;
    res.redirect("/publicaciones");
})
app.get("/perfil", (req, res) =>{
    const usuario = req.session.myvariable;
    delete req.session.myvariable;
    res.render ('perfil',{
        usuario
    })
})
app.listen(port, () => {
    console.log(`Usando el puerto http://localhost:${port}`);
  });