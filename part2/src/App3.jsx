import { useState } from "react";
import Person from "./components/Person";

const App3 = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const person = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    let repetido = false;
    persons.forEach((p) => {
      if (person.name === p.name) {
        repetido = true;
      }
    });
    if (!repetido) setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };
  const personsShown =
    filter === "" ? persons : persons.filter((p) => p.name === filter);
  return (
    <div>
      <h2>PhoneBook</h2>
      <div>
        Filter: <input value={filter} onChange={handleFilterChange} />
      </div>
      <h3>Add New</h3>
      <form onSubmit={addPerson}>
        <div>
          Nombre: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <div>
        <ul>
          {personsShown.map((person) => (
            <Person key={person.id} name={person.name} number={person.number} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App3;
