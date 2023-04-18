"use client";
import React, { useEffect, useState } from "react";
import { Data } from "./impact";
import styles from "./founder.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/Button/Button";

const Founder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === Data.length - 1) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex((c) => c + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.founderContainer}>
      {Data.map((f, index) => {
        return (
          <motion.div
            style={{ display: index === currentIndex ? "block" : "none" }}
            className={styles.slider}
            key={index}
          >
            <h5>{f.heading}</h5>
            <div className={styles.founder}>
              <Image src={f.image} alt="anthony" width={98} height={98} />
              <div>
                <h4>{f.name}</h4>
                <h6>{f.position}</h6>
              </div>
            </div>
            <p>{f.discription}</p>

            <Link href={"/webdevelopment"}>
              <Button varient="primary">Read casestudy</Button>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Founder;
