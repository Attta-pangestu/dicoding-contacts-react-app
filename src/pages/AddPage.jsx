import React from "react";
import { addContacts } from "../utils/data";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
    const navigate = useNavigate();

    function onAddContactHandler(contact) {
        addContacts(contact);
        navigate('/');
    }

    return (
        <section>
            <h2>Tambah Kontak</h2>
            <ContactInput  addContact={onAddContactHandler} />
        </section>
    );
}

export default AddPage;