let getUsuarioByid = ( id, callback ) => {
    let usuario = {
      nombre: 'Samuel',
      id
    }

    if ( id === 20 ) {
      callback( `El usuario con el  ${id} no existe` );
    } else {
      callback( usuario );
    }

    callback( null, usuario );
};


getUsuarioByid( 1, ( err, usuario ) => {

  if (err) {
    return console.log(err);
  }

  console.log('usuario de DB ', usuario);
});
