import React from 'react';

const Client = (props) => {
   
    return (
        <div>
            <h2>{props.first_name}</h2>
            <h2>{props.last_name}</h2>
            <h3>{props.email_name}</h3>
            <button onClick={() => props.deleteClient(props.id)}>Delete Client</button>
        </div>
    )
}

Client.defaultProps = {
    first_name: '',
    last_name: '',
    email: ''
}


export default Client;