import React from 'react'
import List from "./List"
import Form from './Form';
import { useState, useEffect } from "react"
import "./styles.css"

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number: "123123",
        },
        {
            fullname:"Gökçe",
            phone_number:"5652345"
        },
        {
            fullname:"Berkay",
            phone_number:"8978"
        }
    ]);
    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id="container">
            <h1 className="header">Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
