import React from 'react';
import { getContact } from '../utils/api';
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
            initializingCancel : true,
            listContacts : [], 
            keyword : props.searchKeyword || '', 
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }
    
    async componentDidMount(){
        const {data} = await getContact();
        this.setState({
            listContacts: data ,
            initializingCancel: false,
        })
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
        if(this.state.initializingCancel) {
            return null
        }
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