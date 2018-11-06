let empleados = [
  { id: 1, nombre: 'Samuel' },
  { id: 2, nombre: 'Brenda' },
  { id: 3, nombre: 'Alguien' }
];

let salarios = [
  { id: 1, salario: 200 },
  { id: 2, salario: 150 }
];

let getEmpleado = async (id) => {
      let empleadoDB = empleados.find( empleado => empleado.id === id );
      if ( !empleadoDB ) {
        throw new Error(`No existe el empleado con el id ${id}`);
      } else {
        return (empleadoDB);
      }
}

let getSalario = async ( empleado ) => {
    let salarioDB = salarios.find( salario => salario.id === empleado.id );
    if ( !salarioDB ) {
      throw new Error(`No hay salario para ${empleado.nombre}`);
    } else {
      return ({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      });
    }
}


let getInfo = async (id) => {

  let empleado = await getEmpleado(id);
  let respuesta = await getSalario(empleado);

  return `${ respuesta.nombre } tiene un salario de $${ respuesta.salario }`;
}

getInfo(10)
.then( mensaje => console.log(mensaje) )
.catch( err => console.log(err) );
