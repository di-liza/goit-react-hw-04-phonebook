import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Notification from '../Notification';

import { Container } from './App.styled.js';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number, resetForm) => {
    const newContact = {
      name,
      id: nanoid(),
      number,
    };

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    return isContactExists
      ? alert(`${name} is already in contacts`)
      : (setContacts(prevContacts => [newContact, ...prevContacts]),
        resetForm());
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };
  const handleFilterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  const value = getFilteredContacts();

  return (
    <Container>
      <div className="form-wrapper">
        <h2 className="title">PhoneBook</h2>
        <ContactForm addContact={addContact} contacts={contacts} />
      </div>

      <div className="contactsWrapper">
        <h1 className="title">Contacts</h1>
        <div>
          <Filter name={filter} onChangeInput={handleFilterChange} />
          {value.length !== 0 ? (
            <ContactList contacts={value} handleDeleteBTN={deleteContact} />
          ) : (
            <Notification text={'No contacts are available.'} />
          )}
        </div>
      </div>
    </Container>
  );
}
