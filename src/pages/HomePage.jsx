import React from 'react';
import { getContacts, deleteContacts } from '../utils/data';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';

class HomePage extends React.Component {
    constructor(){
        super();

        this.state = {
            listContacts : getContacts(), 
            keyword : ''
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(keyword) {
        this.setState({keyword });
        
    }

    onDeleteHandler(id) {
        const listContacts = deleteContacts(id);
        console.log(listContacts);
        this.setState({ listContacts});
    }

    render() {
        console.log("merender ulang");
        return (
            <section>
                <h2>Daftar Kontak</h2>
                <SearchBar keywordUrl={this.state.keyword} searchHandler={this.searchHandler}/>
                <ContactList contacts={this.state.listContacts} onDelete={this.onDeleteHandler} />
            </section>
        );
    }
}

export default HomePage;