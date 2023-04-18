import React from "react";
import Image from "next/image";
import styles from "./userexperience.module.scss";
import Link from "next/link";
import classnames from "classnames";

const UserExperienceStudio = () => {
  return (
    <>
      <div className={styles.mx}>
        <div className={styles.user_experience_wrapper}>
          <div className={styles.ux_box}>
            <h1>UX</h1>
          </div>
          <div className={styles.user_experience_content}>
            <h2>User Experience Studio </h2>
            <h3>We build outcome focused designs, that drives businesses.</h3>
          </div>
          <div className={styles.user_experience_flexContent}>
            <Link href={"/divisions/userexperiencestudio/startup-ux-service"}>
              <div className={styles.services_icons}>
                <div>
                  <Image
                    src={"/assets/icons/uxService.svg"}
                    alt="icon"
                    width={36}
                    height={36}
                  />
                  <h3>STARTUP</h3>
                  <h3>UX SERVICES</h3>
                </div>
              </div>
            </Link>
            <div className={styles.UserExperienceStudioImg}>
              <Image
                src={"/assets/images/userExperienceStudioImg.png"}
                alt="UserExperienceStudioImg"
                width={708}
                height={423}
              />
            </div>
            <Link
              href={"/divisions/userexperiencestudio/enterprise-ux-service"}
            >
              <div className={styles.services_icons}>
                <div>
                  <Image
                    src={"/assets/icons/enterprise.svg"}
                    alt="enterprise"
                    width={36}
                    height={36}
                  />
                  <h3>ENTERPRISE</h3>
                  <h3>UX SERVICES</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.UserExperience_content_One}>
          <div className={styles.content_one}>
            <Link href={"/divisions/userexperiencestudio/startup-ux-service"}>
              <div>
                <Image
                  src={"/assets/icons/uxService.svg"}
                  alt="service"
                  width={20}
                  height={20}
                />
                <h3>STARTUP</h3>
                <h3>UX SERVICES</h3>
              </div>
            </Link>
          </div>
          <div>
            <Image
              src={"/assets/images/userExperience-img-1.png"}
              alt="UserExperienceImgOne"
              width={195}
              height={243}
            />
          </div>
        </div>

        <div
          className={classnames(
            styles.UserExperience_content_One,
            styles.userExperience_two
          )}
        >
          <div>
            <Image
              src={"/assets/images/userExperience-img-2.png"}
              alt="UserExperienceImgTwo"
              width={202}
              height={227}
            />
          </div>
          <div className={styles.content_one}>
            <Link
              href={"/divisions/userexperiencestudio/enterprise-ux-service"}
            >
              <div>
                <Image
                  src={"/assets/icons/enterprise.svg"}
                  alt="enterprise"
                  width={20}
                  height={20}
                />
                <h3>ENTERPRISE</h3>
                <h3>UX SERVICES</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserExperienceStudio;
