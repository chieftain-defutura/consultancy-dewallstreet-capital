import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "../../../public/assets/icons/conseltancy-logo.svg";
import Close from "../../../public/assets/icons/close.svg";
import Menu from "../../../public/assets/icons/menu.svg";
import Finger from "../../../public/assets/icons/fingerprint.svg";

const Header = () => {
  const [openClose, setOpenClose] = useState(false);

  return (
    <>
      <div className={styles.mx}>
        <div className={styles.header_wrap}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image
                src={"/assets/icons/conseltancy-logo.svg"}
                alt="logo"
                width={360}
                height={42}
              />
            </Link>
          </div>
          <div className={styles.menu}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/divisions"}>Divisions</Link>
            </li>
            <li>
              <Link href={"/impact"}>Impact</Link>
            </li>
          </div>
          <div>
            {openClose && (
              <div className={styles.menu_section}>
                <div
                  className="closeIcon"
                  onClick={() => setOpenClose(!openClose)}
                >
                  <Image src={Close} alt="close_icon" width={24} height={24} />
                </div>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/divisions"}>Divisions</Link>
                </li>
                <li>
                  <Link href={"/impact"}>Impact</Link>
                </li>
                <li>
                  <Link href={"/access"}>Access</Link>
                </li>
              </div>
            )}
          </div>
          <div className={styles.finger}>
            <div className={styles.border}>
              <Link href={"/access"}>
                <Image src={Finger} alt="finger-icon" width={32} height={32} />
              </Link>
            </div>
            <div>
              <a href="/access">Access</a>
            </div>
          </div>
          <div
            className={styles.menu_bar}
            onClick={() => setOpenClose(!openClose)}
          >
            <Image src={Menu} alt="finger-icon" width={24} height={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
// import React from "react";

// const Header = () => {
//   return <div>Header</div>;
// };

// export default Header;
