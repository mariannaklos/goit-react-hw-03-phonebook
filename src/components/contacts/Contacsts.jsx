import React from 'react';
import { Contacte } from './Contacts.style';
import propTypes from 'prop-types';

export const Contact = ({ dataContact, onDelete }) => {
  return (
    <Contacte>
      <h2>Contacts</h2>
      <ul>
        {dataContact.map(data => (
          <li key={data.id}>
            {data.name}: {data.number}
            <button
              type="button"
              onClick={() => {
                onDelete(data.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </Contacte>
  );
};

Contact.propTypes = {
  onDelete: propTypes.func.isRequired,
};