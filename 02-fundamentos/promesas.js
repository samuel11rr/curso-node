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

let getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
      let empleadoDB = empleados.find( empleado => empleado.id === id );
      if ( !empleadoDB ) {
        reject(`No existe el empleado con el id ${id}`);
      } else {
        resolve(empleadoDB);
      }
    });
}

let getSalario = ( empleado ) => {
  return new Promise( ( resolve, reject ) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id );
    if ( !salarioDB ) {
      reject(`No hay salario para ${empleado.nombre}`);
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      });
    }
  });
}

// // forma 1
// getEmpleado(1).then( empleado => {
//   getSalario( empleado ).then( resp => {
//     console.log(`El salario de ${ resp.nombre } es de  $${ resp.salario }`);
//   }, err => console.log(err) );
// }, (err) => console.log(err) );


// // forma 2
getEmpleado(10).then( empleado => {
  return getSalario(empleado);
})
.then( resp => {
  console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }`);
})
.catch( err => {
  console.log(err);
});
