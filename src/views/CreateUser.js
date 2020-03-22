import React, {useState} from "react";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Layout from "../components/Layout";
import useForm from '../hooks/useForm';
import Authenticated from '../Utils/Authenticated';

const CREATE_USER = gql`

    mutation addUser($data:Useradd){

        createUser(data:$data){
            _id
        }
    }
`;


function CreateUser(props) {

    const [executeMutation, {loading,data,error}] =  useMutation(CREATE_USER);

    const [preview,setPreview] =  useState('')

    const catchSubmit = (inputs) => {
        const payload = {
            ...inputs,
        }
        executeMutation({variables:{data:payload}})
    }

    if(!loading && data)  props.history.push('/')
    if(!loading && error) alert(error.message)

    const {inputs,handleInputChange,handleSubmit  } = useForm(catchSubmit)


  return (
    <Layout title="Nuevo Usuario">
      <h2> Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Nombre del Usuario</label>
            <input
              type="text" //password 4 password
              className="form-control"
              placeholder="Nombre del Usuario"
              name="first_name"
              value={inputs.first_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Apellido del Usuario</label>
            <input
              type="text"
              className="form-control"
              name="date"
              value={inputs.date}
              onChange={handleInputChange}
              placeholder="Apellido Usuario"
              required
            />
          </div>
        </div>

        <img src={preview} width="100px" />

 

        <button type="submit" className="btn btn-primary" >
            Submit
        </button>

      </form>
    </Layout>
  );
}

export default Authenticated(CreateUser);
