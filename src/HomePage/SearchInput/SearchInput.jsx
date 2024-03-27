import styles from "../SearchInput/SearchInput.module.css";
export default function SearchInput({
  placeholder,
  onChange,
  value,
  name,
  id,
  type,
}) {
  return (
    <>
      <div className={styles.SearchInput}>
        <span className={styles.ModeIconSearch} />
        <input
          className={styles.SearchBox}
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
