import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };
  render() {
    return (
      <div className="App">
        <h1>Name</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          style={{
            display: "block",
            marginBottom: "10px",
          }}
        />
        <button type="button">Add Contact</button>
      </div>
    );
  }
}

export default App;
