const express = require('express');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const router = express.Router();


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(methodOverride());

app.use('/pepito', express.static(__dirname + '/upload'));

app.all('*', (req, res, next) => {
    console.log(JSON.stringify(req.body));
   next();
});

app.listen(3000, () => {
    console.log('estoy escuchando el puerto 3000');
});

router.get("/api/saludo", (req, res) => {
    res.send({ retorno: "hola mundo curso de nodejs " });
});

router.get("/salida", (req, res) => {
    res.redirect('http://google.com');
});

router.get("/escuchandoinput", (req, res) => {
    res.send({ retorno: "hola mundo curso de nodejs " + req.body.saludo + " " + req.body.curso });
});

router.get("/apiUri/:id/:nombre", (req, res) => {
    res.send({ retorno: "por uri " + req.params.id + " mas " + req.params.nombre });
});

router.post("/apiUriPost", (req, res) => {
    res.send({ retorno: "por uri " + req.body.id + " mas " + req.body.nombre });
});

router.put("/apiUriPost", (req, res) => {
    res.send({ retorno: "por uri " + req.body.id + " mas " + req.body.nombre });
});

router.delete("/apiUriPost", (req, res) => {
    res.send({ retorno: "por uri " + req.body.id + " mas " + req.body.nombre });
});


router.get("/login", (req, res) => {
    res.sendFile(__dirname + '/upload/login.html');
});

app.use(router);
