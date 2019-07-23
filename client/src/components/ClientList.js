import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ClientList extends Component {

    constructor(props){
        super(props)
        this.state = {
            clients: this.props
        }
    }

    render(){
    return (
        <div>
            <Link to={`/client-form/${this.props.id}`}>
               <h2>{this.props.first_name}</h2>
               <h2>{this.props.last_name}</h2>
            </Link>
      </div>
    
    )
  }
}

export default ClientList;