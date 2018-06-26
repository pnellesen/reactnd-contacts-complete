import React, { Component } from 'react';
import * as ContactsAPI  from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import ListContacts from './ListContacts'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
  contacts: []

  }

 componentDidMount() {
   ContactsAPI.getAll().then((contacts) => {
 	  console.log("Got contacts:%O", contacts);
	  this.setState(() =>( { contacts }))
   	})
 }
	
 
 removeContact = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => {
		return c.id !== contact.id
	})
    }))
   
    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
          <Route exact path='/' render={() => (
            <ListContacts
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}
            />
          )}/>        

          <Route path='/create' component={CreateContact}/>

        
      </div>
    )
  }
}

export default App;
