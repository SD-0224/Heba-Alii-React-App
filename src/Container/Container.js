import styles from "../Container/Container.module.css";

export default function LayoutContainer({ children }) {
  return (
    <>
      <div className={styles.Container}>{children}</div>
    </>
  );
}
