function PhoneBookListItem({ id, name, number }) {
  return (
    <li key={id}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
    </li>
  );
}

export default PhoneBookListItem;
