import React from 'react';
import { getContacts, deleteContacts } from '../utils/data';
import { useSearchParams } from 'react-router-dom';

import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';

function HomePageWrapper() {
    const [urlSearchParams, setUrlSearchParams] = useSearchParams();
    const keywordParams = urlSearchParams.get('nama');

    function onSearchHandler(keyword) {
        setUrlSearchParams({
            nama : keyword
        })
    }

    return <HomePage onSearch={onSearchHandler} keywordParams={keywordParams} />
}

class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listContacts : getContacts(), 
            keyword : props.keywordParams || '', 
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(keyword) {
        this.setState({keyword });
        this.props.onSearch(keyword);
        
    }

    onDeleteHandler(id) {
        const listContacts = deleteContacts(id);
        console.log(listContacts);
        this.setState({ listContacts});
    }

    render() {
        const filteredListContacts = this.state.listContacts.filter(contact => contact.name.toLowerCase().includes(this.state.keyword.toLowerCase()))
        return (
            <section>
                <h2>Daftar Kontak</h2>
                <SearchBar keywordUrl={this.state.keyword} searchHandler={this.searchHandler}/>
                <ContactList contacts={filteredListContacts} onDelete={this.onDeleteHandler} />
            </section>
        );
    }
}

export default HomePageWrapper;