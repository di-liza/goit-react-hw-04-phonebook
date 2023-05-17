import { useState } from 'react';
import PropTypes, { shape } from 'prop-types';

import { Form } from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = ({ target: { value } }) => {
    setName(value);
  };

  const handleInputTel = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleContactFormSubmit = e => {
    e.preventDefault();

    addContact(name, number, resetForm);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleContactFormSubmit}>
        <div className="input-wrapper">
          <div>
            <label className="styled-label" htmlFor="name">
              Name
            </label>
            <input
              className="styled-input"
              onChange={handleInputName}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="styled-label" htmlFor="number">
              Number
            </label>
            <input
              className="styled-input"
              onChange={handleInputTel}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
        <button className="addBtn" type="submit">
          Add contact
        </button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
