import React from "react";
import styles from "./impact.module.scss";
import Image from "next/image";
import Founder from "./component/FounderSlider";
import Company from "./component/company";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Impacts = () => {
  return (
    <>
      <div className={styles.impacts_home}>
        <div className={styles.mx}>
          <div className={styles.impact_hero}>
            <div className={styles.hero_wrapper}>
              <Image
                className={styles.member}
                src={"/assets/images/members.png"}
                alt="members"
                width={583}
                height={496}
              />

              <div className={styles.group_img}>
                <Image
                  src={"/assets/images/group-img.png"}
                  alt="members"
                  width={310}
                  height={264}
                />
              </div>
              <div className={styles.explain}>
                <h4>
                  Transformation we cause in the industry, aren’t via big moves,
                  but significantly smaller actions, which we believe, is
                  heading us into what it is to become the great, and be called
                  the novel and disruptive.
                </h4>
              </div>
              <div className={styles.border_right}></div>
            </div>
            <Founder />
          </div>
          <div className={styles.border_bottom}></div>
          <Company />
        </div>
      </div>{" "}
    </>
  );
};

export default Impacts;
