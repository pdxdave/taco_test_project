import React, {Component} from 'react';
import axios from 'axios';
import ClientForm from './components/ClientForm';
import Clients from './components/Clients'
import { Route} from 'react-router-dom';

import './App.css';

class App extends Component {

  constructor(props){
     super(props);
     this.state = {
       clients: []
     }
  }

  

  componentDidMount(){
    axios.get('http://localhost:5000/clients')
    .then(res => {
      console.log('cdmount', res.data)
      this.setState({
         clients: res.data
      })
    })
    .catch(err => console.log(err))
  }

  addClient = (newClient) => {
     this.setState({
        clients: [...this.state.clients, newClient]
     })
  }

  deleteClient = (id) => {
    console.log('del method', id)
     axios.delete(`http://localhost:5000/clients/${id}`)
     .then(res => {
      console.log(this.state.clients, res.data)
       this.setState({
         clients: res.data
       })
     })
     .catch(err => console.log(err))
  }

  render(){
  
  return (
  
    <div className="App">
       <h1>Welcome Taco Client</h1>

       <Route path="/clients" render={(props) => <ClientForm {...props} addClient={this.addClient}/>}  />
       {/* <ClientForm onSubmit={this.addClient} /> */}
       <Clients clients={this.state.clients} deleteClient={this.deleteClient}/>
    </div>
   
  )
  }
}

export default App;
