function Filter({ onChange, filterValue }) {
  return (
    <label>
      Find Contact
      <input
        type="text"
        onChange={onChange}
        name="filter"
        value={filterValue}
        title="Введіть, будь ласка, ім'я, або прізвище людини, яку шукаєте"
        placeholder="Name"
      />
    </label>
  );
}

export default Filter;
