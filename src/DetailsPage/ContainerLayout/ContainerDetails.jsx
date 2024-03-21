import styles from "../ContainerLayout/ContainerDetails.module.css";
export default function DetailsLayoutContainer({ children }) {
  return (
    <>
      <div className={styles.ContainerDetails}>{children}</div>
    </>
  );
}
