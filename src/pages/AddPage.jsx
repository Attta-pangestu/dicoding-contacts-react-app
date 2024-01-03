import React from "react";
import { addContacts } from "../utils/data";
import ContactInput from "../components/ContactInput";

function AddPage() {
    function onAddContactHandler(contact) {
        addContacts(contact);
    }

    return (
        <section>
            <h2>Tambah Kontak</h2>
            <ContactInput  addContact={onAddContactHandler} />
        </section>
    );
}

export default AddPage;