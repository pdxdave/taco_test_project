import React, {Component} from 'react';
import Client from './Client';


class Clients extends Component {
    render(){
        return(
          <div className="clients">
              <ul>
                  {this.props.clients.map(client => 
                      {
                      return (
                          <Client 
                              key = {client.id}
                              id = {client.id}
                              first_name = {client.first_name}
                              last_name = {client.last_name}
                              email = {client.email} 
                              deleteClient = {this.props.deleteClient}
                         />
                       )
                    })}
              </ul>
          </div>
        )
    }
}


export default Clients;