import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.mx}>
          <div className={styles.footer_wrap}>
            <div className={styles.addres}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image
                    src={"/assets/images/dewallcapital-logo.png"}
                    alt="logo"
                    width={236}
                    height={62}
                  />
                </Link>
              </div>
              <div className={styles.address_deteials}>
                <Image
                  src={"/assets/icons/map-pin.svg"}
                  alt="map"
                  width={24}
                  height={24}
                />
                <p>
                  #1, VOC Street, Mahalaxmi Nagar, East Tambaram,
                  <br /> Selaiyur Post, Tamilnadu - 600 059, India.
                </p>
              </div>
              <div className={styles.address_deteials}>
                <Image
                  src={"/assets/icons/mail.svg"}
                  alt="mail"
                  width={24}
                  height={24}
                />

                <p>connect@dewallstreet.capital</p>
              </div>
              <div className={styles.address_deteials}>
                <Image
                  src={"/assets/icons/phone.svg"}
                  alt="mail"
                  width={24}
                  height={24}
                />
                <p>+91 44356 72539/ +91 44356 72539</p>
              </div>
            </div>
            <div>
              <div className={styles.footer_wings}>
                <div className={styles.about}>
                  <div>
                    <ul>
                      <li>
                        <h5>FIRM</h5>
                      </li>
                      <li>About Us</li>
                      <li>Jobs</li>
                      <li>Case Study</li>
                      <li>Latest News</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <h5>WINGS</h5>
                      </li>
                      <li>Bureaus</li>
                      <li>Studios</li>
                      <li>Labs</li>
                      <li>Boards</li>
                    </ul>
                  </div>
                  <div className={styles.medias}>
                    <h5>FOLLOW US ON</h5>
                    <div className={styles.media_apps}>
                      <div className={styles.social_apps}>
                        <Image
                          src={"/assets/icons/twiter.svg"}
                          alt="twiter"
                          width={24}
                          height={24}
                        />
                        <p>Twiter</p>
                      </div>
                      <div className={styles.social_apps}>
                        <Image
                          src={"/assets/icons/instagram.svg"}
                          alt="instagram"
                          width={24}
                          height={24}
                        />
                        <p>Instagram</p>
                      </div>
                      <div className={styles.social_apps}>
                        <Image
                          src={"/assets/icons/linkedin.svg"}
                          alt="linkedin"
                          width={24}
                          height={24}
                        />
                        <p>Linkedin</p>
                      </div>
                      <div className={styles.social_apps}>
                        <Image
                          src={"/assets/icons/telegram.svg"}
                          alt="telegram"
                          width={24}
                          height={24}
                        />
                        <p>Telegram</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.appoinment}>
                  <div className={styles.schedule}>
                    <div className={styles.schedule_wrapper}>
                      <h1>Schedule an </h1>
                      <h1>appointment</h1>
                    </div>
                    <Image
                      src={"/assets/icons/arrow-right-footer.svg"}
                      alt="rigtarrow"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className={styles.follow}>
                    <h5>Follow Us On</h5>
                    <div className={styles.social_media}>
                      <div>
                        <Image
                          src={"/assets/icons/twiter.svg"}
                          alt="twiter"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <Image
                          src={"/assets/icons/instagram.svg"}
                          alt="instagram"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <Image
                          src={"/assets/icons/linkedin.svg"}
                          alt="linkedin"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <Image
                          src={"/assets/icons/telegram.svg"}
                          alt="telegram"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.connect}>
                <h5>Terms | Privacy policies | Connect</h5>
                <p>Copyright @ 2022 Dewallstreet @ All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
