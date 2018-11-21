// PUERTO
process.env.PORT = process.env.PORT || 3000;


// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// DATABASE
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/<DB-NAME>';
} else{
  urlDB = 'mongodb://<DB-USER>:<DB-PASSWORD>@ds249737.mlab.com:49737/<DB-NAME>';
}

process.env.URLDB = urlDB;
