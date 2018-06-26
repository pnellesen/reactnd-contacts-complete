import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import * as ContactsAPI  from './utils/ContactsAPI';

class CreateContact extends Component {
    render () {
        return (
            <div>
            sCreate contact here
            <p className="showing-contact-details"><SubmitButton buttonText={'Show all contacts'} onClick={() => {this.props.changeScreen('list')}}/></p>
            </div>
        )
    }
}

export default CreateContact