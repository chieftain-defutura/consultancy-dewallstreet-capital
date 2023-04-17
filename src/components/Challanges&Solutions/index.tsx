import React from "react";
import { ChallengesAndSolutionsData } from "./data";
import styles from "./challange.module.scss";
import Image from "next/image";

const ChallangeAndSolutions = () => {
  return (
    <div>
      <div className={styles.challengesandsolutions}>
        {ChallengesAndSolutionsData.map((f) => (
          <div className={styles.challanges_solution}>
            <h1>{f.title}.</h1>
            <div>
              <Image src={f.image} alt="challange" width={600} height={320} />
            </div>
            {f.content.map((f) => (
              <div className={styles.challanges_solution_content}>
                <div className={styles.chalange_icon}>
                  <Image src={f.icon} alt="icon" width={64} height={60} />
                </div>
                <div className={styles.description}>
                  <h2>{f.heading}</h2>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallangeAndSolutions;
