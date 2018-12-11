class Usuarios {
    constructor(){
        this.personas = [];
    }


    agregarPersona( id, nombre ){
        let persona = { id, nombre };
        this.personas.push( persona );
        return this.personas;
    }


    getPersona( id ){
        let persona = this.personas.filter( persona => persona.id === id )[0];

        return persona;
    }


    getPersonas(){
        return this.personas;
    }


    getPersonasPorSala( sala ){

    }


    borrarPersona( id ){
        let personaEliminada = this.getPersona( id );

        this.personas = this.personas.filter( persona => persona.id != id);

        return personaEliminada;
    }
}



module.exports = {
  Usuarios
}
