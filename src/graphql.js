import { ApolloClient } from 'apollo-client'; //Cliente de apollo
import { createUploadLink } from 'apollo-upload-client'; // La conexion con el schema 
import { setContext } from 'apollo-link-context'; // Agrega cabeceras
import { InMemoryCache } from 'apollo-cache-inmemory'; // Hace cache de queries

const GRAPH_URI = process.env.REACT_APP_API_URL;

const httpLink = createUploadLink({
    uri:GRAPH_URI
}); // Se conecta a graphql y lee el schema

const authLink = setContext((_,{headers}) => {

    const token  = localStorage.getItem('clone');

    const context = {
        headers:{
            ...headers,
        }
    }

    
    if (token) Object.assign(context.headers,{authorization: `JWT ${token}`});


    return context;

}) // Va agegar cabeceras a cada uno de los request

export default new ApolloClient({
    link:authLink.concat(httpLink), // Es la combinacion del schema y el envio de cabeceras
    cache: new InMemoryCache() // Va hacer cache de todos los queries
})


