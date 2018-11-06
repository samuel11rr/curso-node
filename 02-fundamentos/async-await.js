// FUNCION ASINCRONA
// let getNombre = async() => {
//   // throw new Error('No existe');
//   return 'Samuel';
// };

let getNombre = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Samuel');
    },3000 );
  })
}

let saludo = async() => {

  // espera a la respuesta de la funcion getNombre
  let nombre = await getNombre();

  return `Hola ${nombre}`;
}

saludo().then(mensaje => {
  console.log(mensaje);
})
.catch( err => {
  console.log('Error de ASYNC', err);
});
