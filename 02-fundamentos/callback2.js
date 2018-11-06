let empleados = [
  {
    id: 1,
    nombre: 'Samuel'
  },
  {
    id: 2,
    nombre: 'Brenda'
  },
  {
    id: 3,
    nombre: 'Alguien'
  }
];

let salarios = [
  {
    id: 1,
    salario: 200
  },
  {
    id: 2,
    salario: 150
  }
];


let getEmpleado = ( id, callback ) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id );
    if ( !empleadoDB ) {
      callback(`No exiuste el empleado con el id ${id}`);
    } else {
      callback (null, empleadoDB);
    }
}

// getEmpleado(1, ( err, empleado ) => {
//   if ( err ) {
//     return console.log(err);
//   } else{
//     console.log(empleado);
//   }
// });



let getSalario = ( nombre, callback ) => {
  let empleadoDB = empleados.find( empleado => empleado.nombre === nombre );

  if ( !empleadoDB ) {
    callback(`No existe el empleado con el nombre ${ nombre }`);
  } else {
    let salarioDB = salarios.find( salario => salario.id === empleadoDB.id );

    if ( !salarioDB ) {
      empleadoDB.salario = 'N/A';
    } else{
      empleadoDB.salario = salarioDB.salario;
    }
    callback( null, empleadoDB );
  }
}

getSalario( 'Alguien', ( err, datos ) => {
  if (err) {
    return console.log(err);
  } else{
    console.log(datos);
  }
});
