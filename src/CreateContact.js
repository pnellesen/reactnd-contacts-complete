import React, { Component } from 'react';
import * as ContactsAPI  from './utils/ContactsAPI';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';


class CreateContact extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true})
        if (this.props.onCreateContact) {
            this.props.onCreateContact(values);
        }
    }
    render () {
        return (
            <div>
                <Link className='close-create-contact' to={'/'}>Show all contacts</Link>
                <form className='create-contact-form' onSubmit={this.handleSubmit}>
                    <p>Create New Contact</p>
                    <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64}/>
                    <div>
                        <input type='text' name='name' placeholder='Name'/>
                        <input type='text' name='handle' placeholder='Handle'/>
                    </div>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default CreateContact