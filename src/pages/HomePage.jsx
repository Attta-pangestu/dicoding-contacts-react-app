import React from 'react';
import { getContacts, deleteContacts } from '../utils/data';
import { useSearchParams } from 'react-router-dom';
<<<<<<< HEAD
=======
import {FiDelete} from 'react-icons/fi';
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133

import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';

<<<<<<< HEAD
=======
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
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133

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
<<<<<<< HEAD
            keyword : props.searchKeyword || '', 
=======
            keyword : props.keywordParams || '', 
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }


    searchHandler(keyword) {
        this.setState({keyword });
        this.props.onSearch(keyword);
<<<<<<< HEAD
=======
        
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133
    }

    onDeleteHandler(id) {
        const listContacts = deleteContacts(id);
        this.setState({ listContacts});
    }

    render() {
<<<<<<< HEAD
        const filteredContact = this.state.listContacts.filter(contact => {
            return  contact.name.toLowerCase().includes(this.state.keyword.toLowerCase());
        })
=======
        const filteredListContacts = this.state.listContacts.filter(contact => contact.name.toLowerCase().includes(this.state.keyword.toLowerCase()))
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133
        return (
            <section>
                <h2>Daftar Kontak</h2>
                <SearchBar keywordUrl={this.state.keyword} searchHandler={this.searchHandler}/>
<<<<<<< HEAD
                <ContactList contacts={filteredContact} onDelete={this.onDeleteHandler} />
=======
                <ContactList contacts={filteredListContacts} onDelete={this.onDeleteHandler} />
>>>>>>> 4ed9b10705d8d2b9213edbda08a87dffd1d9f133
            </section>
        );
    }
}

export default HomePageWrapper;