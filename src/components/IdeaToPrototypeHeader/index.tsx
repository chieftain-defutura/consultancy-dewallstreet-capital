import Link from "next/link";
import React from "react";
import styles from "./IdeaToPrototypeHeader.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

const IdeaToPrototypeHeader = () => {
  return (
    <>
      <div className={styles.idea_protoType_wrapper}>
        <div className={styles.mx}>
          <div className={styles.idea_protoType_container}>
            <div className={styles.idea_flex_content}>
              <Link href={"/start-up"} style={{ color: "#fff" }}>
                <div className={styles.ux_content}>
                  <div>
                    <Image
                      src={"/assets/icons/chevron-right.svg"}
                      alt="chevron"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={styles.ux_box}>
                    <h1>UX</h1>
                  </div>
                </div>
              </Link>
              <div className={styles.idea_content}>
                <div className={styles.p_box}>
                  <h1>12P</h1>
                </div>
                <div>
                  <h3>Idea to</h3>
                  <h3>Prototype</h3>
                </div>
              </div>
            </div>

            <ul className={styles.navigation}>
              <li>
                <a href="#over-view">OVER VIEW</a>
              </li>
              <li>
                <a href="#approach">APPROACH</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#benefits">BENEFITS</a>
              </li>
              <li>
                <a href="#testimonials">TESTIMONIALS</a>
              </li>
            </ul>

            <div className={styles.idea_protoType_btn}>
              <Button varient="primary">Schedule an appointment</Button>
            </div>
          </div>
        </div>

        <ul className={styles.media_navigation}>
          <li>
            <a href="#over-view">OVER VIEW</a>
          </li>
          <li>
            <a href="#approach">APPROACH</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#benefits">BENEFITS</a>
          </li>
          <li>
            <a href="#testimonials">TESTIMONIALS</a>
          </li>
        </ul>
        <div className={styles.media_btn}>
          <Button varient="primary">Schedule an appointment</Button>
        </div>
      </div>
    </>
  );
};

export default IdeaToPrototypeHeader;
