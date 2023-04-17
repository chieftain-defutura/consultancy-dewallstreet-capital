"use client";
import ApprochOurProject from "@/components/ApprochOurProject";
import Collaborate from "@/components/Collabrate";
import IdeaToPrototypeHeader from "@/components/IdeaToPrototypeHeader";
import Portfolio from "@/components/Portfolio";
import React, { useEffect, useState } from "react";
import styles from "./interactive.module.scss";

const IdeaToProtoType = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <IdeaToPrototypeHeader />
      <div className={styles.inter_active_wrapper} id={styles.over_view}>
        <div>
          <div className={styles.inter_active_container}>
            <h1>
              We bring our client’s ideas to life and create an Interactive
              prototype.
            </h1>
            <div className={styles.inter_active_video}>
              <video
                src="https://ik.imagekit.io/d4cf2o3ja/video.mp4?updatedAt=1680083404680"
                autoPlay
                loop
                muted
              ></video>
            </div>
            <div className={styles.inter_active_flex_content}>
              <div className={styles.para_content}>
                <h2>
                  50<span>+</span>
                </h2>
                <p>Happy clients</p>
              </div>
              <div className={styles.para_content}>
                <h2>
                  50<span>+</span>
                </h2>
                <p>Completed project</p>
              </div>
              <div className={styles.para_content}>
                <h2>
                  100<span>%</span>
                </h2>
                <p>Dedicated team</p>
              </div>
              <div className={styles.para_content}>
                <h2>
                  100<span>%</span>
                </h2>
                <p>Dedicated team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApprochOurProject />
      <Portfolio />
      <Collaborate
        title="You’re one step away from making your ideas into reality."
        textAlign="center"
        heading="BENEFITS"
      />
      {/* <div>
        {isVisible && (
          <div className={styles.topButton} onClick={scrollToTop}>
            <Image
              src={"/assets/icons/arrow-up.svg"}
              alt="closeUp"
              width={32}
              height={32}
            />
          </div>
        )}
      </div> */}
    </>
  );
};

export default IdeaToProtoType;
