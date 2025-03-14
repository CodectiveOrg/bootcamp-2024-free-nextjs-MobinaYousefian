import { ReactElement } from "react";

import ButtonComponent from "@/components/button/button.component";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent variant="destructive">خروج</ButtonComponent>
    </div>
  );
}
