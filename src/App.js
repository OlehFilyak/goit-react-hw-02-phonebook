import React from "react";
import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import PhoneBookList from "./Components/PhoneBookList/PhoneBookList";
import PhoneBookEditor from "./Components/PhoneBookEditor/PhoneBookEditor";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [],
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
          <PhoneBookList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
