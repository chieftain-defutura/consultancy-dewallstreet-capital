import React from "react";
import { LatestNewsData } from "./data";
import Button from "../Button/Button";
import styles from "./latestnews.module.scss";
import Image from "next/image";
import Link from "next/link";

const LatestNews = () => {
  return (
    <div className={styles.latest_news}>
      <h1>Latest NEWS.</h1>
      <div className={styles.latest_news_divisions}>
        {LatestNewsData.map((f, i) => (
          <div className={styles.latest_news_columns}>
            <div className={styles.first_column}>
              <Image
                src={f.firstImage}
                alt="firstImage"
                width={432}
                height={300}
              />
              <h2>{f.firstHeading}</h2>
              <p>{f.firstContent}</p>
            </div>
            <div className={styles.second_column}>
              <Image
                src={f.secondImage}
                alt="secondImage"
                width={232}
                height={204}
              />

              <p>{f.secondContent}</p>
              <h2>{f.secondHeading}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <Link
          href={
            "/divisions/userexperiencestudio/startup-ux-service/ideatoprototype/"
          }
        >
          <Button varient="secondary" style={{ background: "#252525" }}>
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;
