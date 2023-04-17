import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import styles from "./portfolio.module.scss";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div>
      <div className={styles.portFolio_wrapper} id={styles.portfolio}>
        <div className={styles.mx}>
          <div className={styles.portFolio_head}>
            <p>PORTFOLIO</p>
          </div>
          <div className={styles.portFolio_flexContent}>
            <div>
              <h1>We innovatively resolved project</h1>
              <h1>challenges pre-delivery.</h1>
            </div>
            <div className={styles.read_casestudy_btn}>
              <Link href={"/webdevelopment"}>
                <Button varient="secondary">Read casestudy</Button>
              </Link>
            </div>
          </div>

          <div className={styles.web_development_container}>
            <div className={styles.web_development_video}>
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source
                  src="https://ik.imagekit.io/d4cf2o3ja/web-development.mp4?updatedAt=1680263299603"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className={styles.overflow}>
              <div className={styles.web_development_images}>
                <div className={styles.web_development_img_flex}>
                  <div>
                    <Image
                      src={"/assets/images/web-development-1.png"}
                      alt="WebDevelopmentOne"
                      width={259}
                      height={178}
                    />
                  </div>
                  <div>
                    <Image
                      src={"/assets/images/web-development-2.png"}
                      alt="WebDevelopmentTwo"
                      width={259}
                      height={178}
                    />
                  </div>
                </div>
                <div className={styles.web_develop}>
                  <Image
                    src={"/assets/images/web-development-3.png"}
                    alt="WebDevelopmentThree"
                    width={324}
                    height={224}
                  />
                </div>
              </div>

              <div className={styles.web_development_images}>
                <div className={styles.web_development_img_flex}>
                  <div>
                    <Image
                      src={"/assets/images/web-development-1.png"}
                      alt="WebDevelopmentOne"
                      width={259}
                      height={178}
                    />
                  </div>
                  <div>
                    <Image
                      src={"/assets/images/web-development-2.png"}
                      alt="WebDevelopmentTwo"
                      width={259}
                      height={178}
                    />
                  </div>
                </div>
                <div className={styles.web_develop}>
                  <Image
                    src={"/assets/images/web-development-3.png"}
                    alt="WebDevelopmentThree"
                    width={324}
                    height={224}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
