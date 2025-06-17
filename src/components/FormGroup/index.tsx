import styles from "./styles.module.css";
import type { IFormGroupProps } from "./types";

export default function FormGroup({ children, error }: IFormGroupProps) {
  return (
    <div data-error={!!error} className={styles.formGroup}>
      {children}
      {error && <small>{error.message}</small>}
    </div>
  );
}
