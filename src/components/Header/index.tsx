import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        My<span>Contacts</span>
      </h1>
    </div>
  );
}
