import React from "react";
import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import PhoneBookList from "./Components/PhoneBookList/PhoneBookList";
import PhoneBookEditor from "./Components/PhoneBookEditor/PhoneBookEditor";
import Filter from "./Components/Filter/Filter";
import filterContacts from "./helpers/filtersContacts";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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

    if (this.state.contacts.some((el) => el.name === this.state.name)) {
      alert(`${this.state.name} has alredy be declared`);
      return;
    }
    let contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
      name: "",
      number: "",
    }));
  };

  onDeleteContact = (e) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== e.target.id),
    });
  };

  handleChangeFilter = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    return (
      <div className="App">
        <Section title={"Phonebook"}>
          <PhoneBookEditor
            name={this.state.name}
            number={this.state.number}
            handleAddNewContact={this.handleAddNewContact}
            handleChangeInput={this.handleChangeInput}
          />
        </Section>
        <Section title={"Contacts"}>
          <Filter
            onChange={this.handleChangeFilter}
            filterValue={this.state.filter}
          />
          <PhoneBookList
            contacts={contacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
