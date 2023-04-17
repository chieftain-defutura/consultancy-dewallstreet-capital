import React from "react";
import styles from "./improve.module.scss";
import Image from "next/image";

const ImproveBuisness = () => {
  return (
    <div className={styles.improve_buisness}>
      <h1>How our work improves your business.</h1>
      <div className={styles.improve_buisness_content}>
        <div className={styles.details}>
          <Image
            src={"/assets/images/improve-buisness.jpg"}
            alt="before-img"
            width={600}
            height={320}
          />
          <p>Before</p>
        </div>

        <div className={styles.details}>
          <Image
            src={"/assets/images/improve-buisness.jpg"}
            alt="before-img"
            width={600}
            height={320}
          />
          <p>After</p>
        </div>
      </div>
    </div>
  );
};

export default ImproveBuisness;
