import React, { Component } from 'react';
import { FormContact } from './formcontact/FormContact';
import { Contact } from './contacts/Contacsts';
import { Filter } from './filtr/Filter';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const getContact = localStorage.getItem('contact');
    const parseContact = JSON.parse(getContact);
    if (parseContact !== null) {
      this.setState({ contacts: parseContact });
      return;
    }
  }

  addNamesContact = (name, number) => {
    const addCont = {
      id: shortid.generate(),
      name,
      number,
    };

    const gmapCont = this.state.contacts.map(({ name }) => name.toLowerCase());
    const nameToLowerCase = name.toLowerCase();
    if (gmapCont.includes(nameToLowerCase)) {
      return alert(`${name} is already in contacs.`);
    }

    this.setState(prevState => ({
      contacts: [addCont, ...prevState.contacts],
    }));
  };

  filtrChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterRender = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    const localClear = this.state.contacts.filter(contact => contact.id === id);

    localStorage.removeItem(localClear[0].name);
    this.setState({ filter: '' });
  };

  render() {
    const visibleStat = this.filterRender();
    return (
      <div>
        <FormContact addNamesContact={this.addNamesContact} />
        <Filter onChange={this.filtrChange} value={this.state.filter} />
        <Contact dataContact={visibleStat} onDelete={this.onDelete} />
      </div>
    );
  }
}