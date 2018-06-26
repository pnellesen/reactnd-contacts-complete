import React, { Component } from 'react';
import * as ContactsAPI  from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import ListContacts from './ListContacts'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
  contacts: []

  }

  addNewContact = (contact) => {
    console.log("addNewContact: %O", contact);
    ContactsAPI.create(contact).then((contact) => {
        this.setState((prevState) => ({
          contacts: prevState.contacts.concat([contact])
        }))
      }
    )
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

          <Route path='/create' render={({history}) => (
            <CreateContact onCreateContact={(contact) => {
              this.addNewContact(contact)
              history.push('/')
            }}/>
          )}/>

        
      </div>
    )
  }
}

export default App;
