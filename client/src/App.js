import React, {Component} from 'react';
import axios from 'axios';
import ClientForm from './components/ClientForm';
import Clients from './components/Clients'
import UpdateForm from './components/UpdateForm';
import Client from './components/Client';

import { Route} from 'react-router-dom';


import './App.css';

class App extends Component {

  constructor(){
     super();
     this.state = {
       clients: [],
       activeClient: null
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

  addClient = newClient => {
    axios.post('http://localhost:5000/clients')
    .then(res => {
       this.setState({
         clients: res.data
       })
       this.props.history.push("/client-list")
     })
     .catch(err => console.log(err))
  }

  deleteClient = (id) => {
     axios.delete(`http://localhost:5000/clients/${id}`)
     .then(res => {
       this.setState({
         clients: res.data
       })
       this.props.history.push("/client-list")
     })
     .catch(err => console.log(err))
  }

  // populateForm = (client) => {
  //     this.setState({
  //        activateItem: client
  //     })
  //     this.props.history.push("/client-form")
  // }


  updateClient = (updateClient) => {
    axios.put(`http://localhost:5000/clients/${updateClient.id}`, updateClient)
     .then(res => {
       this.setState({
         clients: res.data
       })
       this.props.history.push("/client-list")
     })
     .catch(err => console.log(err))
  }

  setActiveClient = client => {
     this.setState({
        activeClient: client
     })
  }

  render(){
  
  return (
  
    <div className="App">
       <h1>Welcome Taco Client</h1>
       <Route 
            path="/new-client" 
            render={props => <ClientForm  
                             addClient={this.state.addClient} {...props}  />}
       />
       <Route 
            path="/client-list/:id"
            render={props => (<Client clients={this.state.clients} 
                                      setActiveClient={this.activeClient} 
                                      deleteClient={this.deleteClient} />)  }
       />

       <Route path="/update-client" render={(props) => <UpdateForm {...props} addClient={this.addClient}/>}  />

      
       <Clients clients={this.state.clients} deleteClient={this.deleteClient} updateClient={this.updateClient} />
    </div>
   
  )
  }
}

export default App;
