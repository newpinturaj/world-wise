import React from "react";
import Sidebar from "./Sidebar";
import Map from "./Map";
import styles from "./AppLayout.module.css";
import User from "./User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
