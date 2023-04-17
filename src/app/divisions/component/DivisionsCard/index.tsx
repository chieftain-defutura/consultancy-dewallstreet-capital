import React from "react";
import { DivisionsData } from "./data";
import Image from "next/image";
import styles from "./DivisionsCard.module.scss";
import Link from "next/link";

const DivisionsCard = () => {
  return (
    <>
      <div className={styles.division_card}>
        {DivisionsData.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.first_layer}>
              <Image src={f.icons} alt="icon" width={32} height={32} />
              <Image
                src={"/assets/icons/dewall-logo.svg"}
                alt="logo"
                width={160}
                height={21}
              />
              <p>{f.title}</p>
            </div>
            <div className={styles.second_layer_parent}>
              {f.content.map((f, i) => (
                <Link href={f.path}>
                  <div key={i} className={styles.second_layer}>
                    <Image
                      src={"/assets/icons/arrow-right.svg"}
                      alt="icon"
                      width={20}
                      height={20}
                    />

                    <p>{f.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DivisionsCard;
