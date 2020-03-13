import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";

const GET_EVENT = gql`

    query getOneEvent($id:ID!){
        getEvent(id:$id){
            _id
            title
            banner
            description
            created_by{
                first_name
                last_name
            }
        }
    }


`

function DetailEvent(props) {
  const { loading, data, error } = useQuery(GET_EVENT,{variables:{
      id:props.match.params.id//Esto es de react router DOM 
  }});

  if (loading) return <h2>Cargando... </h2>;
  if (!loading && error) return <h3>{error.message}</h3>;

  return (
    <Layout title={data.getEvent.title} banner={data.getEvent.banner}>
      <h3>
        Author: {data.getEvent.created_by.first_name}{" "}
        {data.getEvent.created_by.last_name}
      </h3>
      <p>{data.getEvent.description}</p>
    </Layout>
  );
}

export default DetailEvent;
