// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Data } from "./impact";
// import styles from "./founder.module.scss";
// import Image from "next/image";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";

// import Button from "@/components/Button/Button";

// const Founder = () => {
//   // const [currentIndex, setCurrentIndex] = useState(0);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     if (currentIndex === Data.length - 1) {
//   //       setCurrentIndex(0);
//   //       return;
//   //     }
//   //     setCurrentIndex((c) => c + 1);
//   //   }, 3000);

//   //   return () => {
//   //     clearInterval(interval);
//   //   };
//   // }, []);
//   const [position, positionSet] = useState(0);
//   const onRight = () => {
//     if (position < Data.length - 1) {
//       positionSet(position + 1);
//     }
//   };
//   const onLeft = () => {
//     if (position > 0) {
//       positionSet(position - 1);
//     }
//   };
//   return (
//     <motion.div className={styles.founderContainer}>
//       <div
//         style={{
//           position: "absolute",
//         }}
//       >
//         <button onClick={onRight}>&lt;&lt;</button>
//         <button onClick={onLeft}>&gt;&gt;</button>
//       </div>
//       {Data.map((f, index) => {
//         return (
//           <motion.div
//             // style={{ display: index === currentIndex ? "block" : "none" }}
//             className={styles.slider}
//             key={index}
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{
//               rotate: 0,
//               left: `${(index - position) * 60 - 30}vw`,
//               scale: index === position ? 1 : 0.8,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 260,
//               damping: 20,
//             }}
//           >
//             <h5>{f.heading}</h5>
//             <div className={styles.founder}>
//               <Image src={f.image} alt="anthony" width={98} height={98} />
//               <div>
//                 <h4>{f.name}</h4>
//                 <h6>{f.position}</h6>
//               </div>
//             </div>
//             <p>{f.discription}</p>

//             <Link href={"/webdevelopment"}>
//               <Button varient="primary">Read casestudy</Button>
//             </Link>
//           </motion.div>
//         );
//       })}
//     </motion.div>
//   );
// };

// export default Founder;
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "./impact";
import Button from "@/components/Button/Button";
import styles from "./founder.module.scss";
import Image from "next/image";

const Founder: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
  };

  return (
    <Slider {...settings}>
      {Data.map((f, index) => {
        return (
          <div className={styles.slider} key={index}>
            <h5>{f.heading}</h5>
            <div className={styles.founder}>
              <Image src={f.image} alt="anthony" width={98} height={98} />
              <div>
                <h4>{f.name}</h4>
                <h3>{f.position}</h3>
              </div>
            </div>
            <p>{f.discription}</p>
            <Button varient="primary">Read casestudy</Button>
          </div>
        );
      })}
    </Slider>
  );
};

export default Founder;
