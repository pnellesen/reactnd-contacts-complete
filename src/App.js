import React, { Component } from 'react';
import * as ContactsAPI  from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
  contacts: [],
  screen: 'list'
  }
  changeScreen = (newScreen) => {
     console.log("Change screen. newScreen is: " + newScreen);
      if (this.state.screen !== newScreen) this.setState({screen: newScreen});
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
        {this.state.screen === 'list' && (
          <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
          changeScreen={this.changeScreen}

          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact changeScreen={this.changeScreen}/>
        )}
        
      </div>
    )
  }
}

export default App;
