import React from 'react';
import { getContacts, deleteContacts } from '../utils/data';
import { useSearchParams } from 'react-router-dom';

import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';


function HomePageWrapper() {
    const [urlSearchParams, setSearchParams] = useSearchParams();
    const searchKeyword = urlSearchParams.get('contact');
    
    function onSearch(keyword) {
        setSearchParams({
            contact: keyword, 
        })
    }

    return <HomePage searchKeyword={searchKeyword} onSearch={onSearch} />;
}

class HomePage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            listContacts : getContacts(), 
            keyword : props.searchKeyword || '', 
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
        this.setState({ listContacts});
    }

    render() {
        const filteredContact = this.state.listContacts.filter(contact => {
            return  contact.name.toLowerCase().includes(this.state.keyword.toLowerCase());
        })
        return (
            <section>
                <h2>Daftar Kontak</h2>
                <SearchBar keywordUrl={this.state.keyword} searchHandler={this.searchHandler}/>
                <ContactList contacts={filteredContact} onDelete={this.onDeleteHandler} />
            </section>
        );
    }
}

export default HomePageWrapper;