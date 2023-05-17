import PropTypes, { shape } from 'prop-types';

import { ListBox } from './ContactList.styled';
import Contact from 'components/Contact';

export default function ContactList({ contacts, handleDeleteBTN }) {
  return (
    <>
      <ListBox>
        <ul>
          {contacts.map(({ name, id, number }) => {
            return (
              <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                handleDeleteBTN={handleDeleteBTN}
              ></Contact>
            );
          })}
        </ul>
      </ListBox>
    </>
  );
}
ContactList.propTypes = {
  handleDeleteBTN: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
