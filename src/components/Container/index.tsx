import React from "react";
import styles from "./styles.module.css";

export default function index({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
