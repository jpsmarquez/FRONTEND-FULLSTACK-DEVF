import React,{ useState } from "react";
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Layout from "../components/Layout";

const LOGIN =  gql`

  query sendLogin($email:String,$password:String){
    login(email:$email,password:$password)
  }
`

function Login(props) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [executeQuery,{loading,data,error}] = useLazyQuery(LOGIN,{variables:{ email,password }})

  const handleSubmit = (event) => {
    event.preventDefault();
    executeQuery();
    if(!loading && data){
      localStorage.setItem('clone',data.login)
      props.history.push('/')
    }else if(!loading && error){
      alert(error.message);
    }

  }
  return (
    <Layout title="Inicia Sesion">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" novalidate>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={ (event) => setEmail(event.target.value)  }
              required
            />
          </div>
        </div>
        <div class="control-group">
          <div class="form-group floating-label-form-group controls">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={ (event) => setPassword(event.target.value)  }
              required
            />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" id="sendMessageButton">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Login;
