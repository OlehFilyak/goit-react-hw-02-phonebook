import PropTypes from "prop-types";
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

PhoneBookListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default PhoneBookListItem;
