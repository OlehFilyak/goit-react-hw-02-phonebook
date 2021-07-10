import css from "./Section.module.css";
function Section({ title, children }) {
  return (
    <section className={css.section}>
      {title.toLowerCase() === "phonebook" ? (
        <h1>{title}</h1>
      ) : (
        <h2>{title}</h2>
      )}
      {children}
    </section>
  );
}

export default Section;
