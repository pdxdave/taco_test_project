import React, {Component} from 'react';
import axios from 'axios';

class ClientForm extends Component {

    constructor(props){
        super(props);
        this.state = {
           first_name: '',
           last_name: '',
           email: ''
        }
    }

   addClient = e => {
       e.preventDefault()
       const newClient = {
           first_name: this.state.first_name,
           last_name: this.state.last_name,
           email: this.state.email
       }

       axios.post('http://localhost:5000/clients', newClient)
       .then(res => {
           this.props.addClient(res.data);
        //    this.props.onSubmit(res.data)
       })
       .catch(err => {console.log(err)})
   }

   handleInputChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   render(){
       return(
           <div className="client_form">
               <form onSubmit={this.addClient}>
                    <input 
                        type="text"
                        placeholder="first name"
                        name="first_name"
                        onChange={this.handleInputChange}
                        />
                        <input 
                        type="text"
                        placeholder="last name"
                        name="last_name"
                        onChange={this.handleInputChange}
                        />
                        <input 
                        type="email"
                        placeholder="emal"
                        name="email"
                        onChange={this.handleInputChange}
                        />
                <button type="submit" className="button">Submit</button>
               </form>
           </div>
       )
   }
}

export default ClientForm;