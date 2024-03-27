import styles from "./Buttons.module.css";
export default function Buttons({
  style,
  id,
  className,
  label,
  icon,
  ...props
}) {
  return (
    <>
      <button className={styles.HederButtons} {...props}>
        <ion-icon name={icon}></ion-icon>
        {label}
        {id}
      </button>
    </>
  );
}
