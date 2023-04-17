import React from "react";
import styles from "../DivisionsCard/DivisionsCard.module.scss";
import Image from "next/image";
const DivisionsHeader = () => {
  return (
    <div className={styles.division_header}>
      <div className={styles.division_header_title}>
        <Image
          src={"/assets/images/rocket.svg"}
          alt="Rocket"
          width={100}
          height={100}
        />
        <h1>
          The <span> success formula </span> we invented for any business,
          organization to succeed <span>.</span>
        </h1>
      </div>
      <div className={styles.division_header_content}>
        <p>
          No worries anymore, whether you are building a startup, enterprise,
          corporate, trust or any organizations. Take easy steps with our custom
          built divisions and focus on your core missions while outsourcing the
          rest of works from our dedicated service divisions.
        </p>
      </div>
    </div>
  );
};

export default DivisionsHeader;
