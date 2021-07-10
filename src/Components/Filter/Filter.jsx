function Filter({ onChange, filterValue }) {
  return (
    <label>
      Знайди потрібний контакт
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
