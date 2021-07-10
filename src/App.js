import React from "react";
import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import PhoneBookList from "./Components/PhoneBookList/PhoneBookList";
import PhoneBookEditor from "./Components/PhoneBookEditor/PhoneBookEditor";
import SearchContactInput from "./Components/SearchContactInput/SearchContactInput";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleRecordNameToStateName = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNewContact = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
    console.log(contact);
    console.log(this.state.contacts);
  };

  onDeleteContact = (e) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== e.target.id),
    });
    console.log();
  };

  onSearchContact = (e) => {};

  render() {
    return (
      <div className="App">
        <Section title={"Phonebook"}>
          <PhoneBookEditor
            handleAddNewContact={this.handleAddNewContact}
            handleRecordNameToStateName={this.handleRecordNameToStateName}
          />
        </Section>
        <Section title={"Add contact"}>
          <SearchContactInput />
          <PhoneBookList
            contacts={this.state.contacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
