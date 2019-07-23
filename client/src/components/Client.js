import React from 'react';
// import {Route} from 'react-router-dom';


const Client = props => {

    const client = props.clients.find(client => {
        return `${client.id}` === props.match.params.id
    })

    const updateClient = (e) => {
       e.preventDefault();

       props.setActiveClient(client);
       props.history.push("/update-client")
    }

    const deleteClient = (e) => {
       e.preventDefault();

       props.deleteClient(client.id);
    }

    return(
        <div>
           <h2>{client.first_name}</h2>
           <h2>{client.last_name}</h2>
           <button onClick={deleteClient}>Delete Client</button>
           <button onClick={updateClient}>Update Client</button>
        </div>
    )
}


export default Client;