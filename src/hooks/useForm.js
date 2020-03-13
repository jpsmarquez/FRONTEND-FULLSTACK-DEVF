import React, {useState} from 'react';


function useForm(callback){

    const [inputs,setInputs] = useState({}); // Declarar un obketo donde se guardaran los datos

    const handleSubmit = (event) => { // Capturar el submit del formulario y enviara la informacion
        if(event) event.preventDefault();
        callback(inputs) //Aqui se envia la info a la vista
    }

    const handleInputChange = (event) => { // Cacha los valores ingresados por los usuarios
        event.persist(); // SyntaticEnts  permite acceder de forma asuincrona a los valores del evnto
        const {name,value} = event.target // Obtenemos el nombre del input y su valor
        setInputs(prevInputs => ({...prevInputs,[name]:value})) // va agregar o modificar los valores en el objeto
    } 

    return {
        inputs,
        handleSubmit,
        handleInputChange
    }

}

export default useForm;