function PhoneBookListItem({ id, name, number, onDeleteContact }) {
  return (
    <li key={id}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={onDeleteContact} id={id}>
        Delete
      </button>
    </li>
  );
}

export default PhoneBookListItem;
