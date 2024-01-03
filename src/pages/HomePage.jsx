import React from 'react';
import { getContacts, deleteContacts } from '../utils/data';
import ContactList from '../components/ContactList';

class HomePage extends React.Component {
    constructor(){
        super();

        this.state = {
            listContacts : getContacts(), 
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const listContacts = deleteContacts(id);
        console.log(listContacts);
        this.setState({ listContacts});
    }

    render() {
        console.log("Ini List ")
        return (
            <section>
                <h2>Daftar Kontak</h2>
                <ContactList contacts={this.state.listContacts} onDelete={this.onDeleteHandler} />
            </section>
        );
    }
}

export default HomePage;