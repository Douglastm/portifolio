import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";

import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}