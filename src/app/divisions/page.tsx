"use client";
import React from "react";
import DivisionsCard from "./component/DivisionsCard";
import DivisionsHeader from "./component/DivisionsHeader";
import styles from "./component/DivisionsCard/DivisionsCard.module.scss";
import Header from "@/components/Header";

const Divisions = () => {
  return (
    <>
      <Header />
      <div className={styles.division_parent}>
        <div className={styles.divisions}>
          <DivisionsHeader />
          <DivisionsCard />
        </div>
      </div>
    </>
  );
};

export default Divisions;
