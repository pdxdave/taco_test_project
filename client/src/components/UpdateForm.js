import React, {Component} from 'react';

class updateForm extends Component {

    state = {
        client: this.props.activeClient
    }

    // handleInputChange = (e) => {
    //   e.persist();
    //   let value = e.target.value;
    //   if (e.target.name === "first_name"){
    //       value = parseInt(value, 10)
    //   }
    //   this.setState(prevState => {
    //       client: {
    //           ...prevState.client,
    //           [e.target.value]: value
    //       }
    //   })
    // }


    // handleSubmit = e => {
    //     e.preventDefault();

    //     this.props.updateClient(this.state.client)
    // }


    render(){
        return(
            <div>
              <div className="client_form">
                  <h3>Update Client</h3>
               <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="first name"
                        name="first_name"
                        onChange={this.handleInputChange}
                        value={this.state.client.first_name}
                        />
                        <input 
                        type="text"
                        placeholder="last name"
                        name="last_name"
                        onChange={this.handleInputChange}
                        value={this.state.client.last_name}
                        />
                        <input 
                        type="email"
                        placeholder="emal"
                        name="email"
                        onChange={this.handleInputChange}
                        value={this.state.client.email}
                        />
                <button  className="button">Update Client</button>
               </form>
           </div>
            </div>
        )
    }
}

export default updateForm;