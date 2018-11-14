const http = require('http'); //ya viene en node

http.createServer( (req, res) => {

  res.writeHead(200, {'Content-Type': 'application/json'});

  let salida = {
    nombre: 'Samuel',
    edad: 27,
    url: req.url
  }

  // res.write('Hola Mundo');
  res.write(JSON.stringify(salida));
  res.end();

})
.listen(8080);

console.log('escuchando puerto 8080');
