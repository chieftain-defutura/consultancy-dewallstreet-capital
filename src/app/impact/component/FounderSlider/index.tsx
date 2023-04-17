import React from "react";
import { Data } from "./impact";
import styles from "./founder.module.scss";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Button from "@/components/Button/Button";

const Founder = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {Data.map((f, index) => {
        return (
          <div className={styles.slider} key={index}>
            <h5>{f.heading}</h5>
            <div className={styles.founder}>
              <Image src={f.image} alt="" />
              <div>
                <h4>{f.name}</h4>
                <h6>{f.position}</h6>
              </div>
            </div>
            <p>{f.discription}</p>

            <Link href={"/webdevelopment"}>
              <Button varient="primary">Read casestudy</Button>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default Founder;