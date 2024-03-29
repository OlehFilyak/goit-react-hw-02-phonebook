import { Component } from "react";
import { nanoid } from "nanoid";

import Container from "./Components/Container/";
import Section from "./Components/Section";
import PhoneBookList from "./Components/PhoneBookList";
import PhoneBookEditor from "./Components/PhoneBookEditor";
import Filter from "./Components/Filter";
import filterContacts from "./helpers/filtersContacts";
import InitialContacts from "./data/InitialContacts.json";

import "./App.css";

class App extends Component {
  state = {
    contacts: InitialContacts,
    name: "",
    number: "",
    filter: "",
  };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddNewContact = (e) => {
    e.preventDefault();

    const { contacts, name, number } = this.state;
    if (contacts.some((el) => el.name === name)) {
      alert(`${name} has alredy be declared`);
      return;
    }

    let contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
      name: "",
      number: "",
    }));
  };

  onDeleteContact = (e) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((el) => el.id !== e.target.id),
    });
  };

  handleChangeFilter = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    const { name, number, filter } = this.state;
    return (
      <div className="App">
        <Container>
          <Section title={"Phonebook"}>
            <Section title={"Add new contact"}>
              <PhoneBookEditor
                name={name}
                number={number}
                handleAddNewContact={this.handleAddNewContact}
                handleChangeInput={this.handleChangeInput}
              />
            </Section>
            <Section title={"Contacts"}>
              <Filter onChange={this.handleChangeFilter} filterValue={filter} />
              <PhoneBookList
                contacts={contacts}
                onDeleteContact={this.onDeleteContact}
              />
            </Section>
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
