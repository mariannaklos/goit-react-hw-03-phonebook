import { Component } from 'react';
import { FormStyled } from './Form.styled';
import propTypes from 'prop-types';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  hundelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hundSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.addNamesContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormStyled onSubmit={this.hundSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.hundelChange}
            value={this.state.name}
            required
            id="nameInputId"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.hundelChange}
            value={this.state.number}
            required
          />
        </label>
        <button type="submit">add new contact</button>
      </FormStyled>
    );
  }
}

FormContact.propTypes = {
  addNamesContact: propTypes.func.isRequired,
};