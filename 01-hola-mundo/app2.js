function saludar ( nombre ){
  let mensaje = `Hola ${ nombre }`;

  return mensaje;
}

let saludo = saludar( 'Samuel' );

console.log( saludo );
