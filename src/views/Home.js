import React from "react"; //useState  -> hook
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Layout from '../components/Layout';
import Card from "../components/Card";

const GET_EVENTS = gql`
  {
    getEvents {
      _id
      title
      date
      createdAt
      created_by {
        first_name
        last_name
      }
    }
  }
`;

function Home() {
  //const [title,setTitle] = useState('Clone de Meetup')
  const { loading, data, error } = useQuery(GET_EVENTS);
  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h3>{error.message}</h3>;

  return (
     
       <Layout title="template" background-color="red">
           {data.getEvents.map(event => (
                <Card
                  id={event._id}
                  title={event.title}
                  author={`${event.created_by.first_name} ${event.created_by.last_name} `}
                  date={event.date.split('T')[0]}
                />
              ))}
       </Layout>
            
  );
}

export default Home;
