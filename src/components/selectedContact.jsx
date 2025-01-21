import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        };

        fetchContact();
    }, [selectedContactId]);

    if (!contact) {
        return <p>Loading contact information...</p>;
    }

    return (
        <div>
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Website:</strong> <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></p>
            <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
        </div>
    );
};

export default SelectedContact;