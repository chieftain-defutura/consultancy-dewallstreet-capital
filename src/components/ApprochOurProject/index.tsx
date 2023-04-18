import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IApproachOurProject,
  IPostProduction,
  IProduction,
} from "./approchourproject";
import styles from "./approchourproject.module.scss";
import Image from "next/image";

const ApprochOurProject = () => {
  const ref = useRef<Slider>(null);
  const [isActive, setisActive] = useState("Preproduction");
  const [active, setActive] = useState(0);
  const [activeColor, setActiveColor] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <div className={styles.approachOurProject_wrapper} id={styles.approach}>
        <div>
          <div className={styles.approachOurProject_container}>
            <h1>How we approach our Projects</h1>
            <div className={styles.approachOurProject_flex_content}>
              <div onClick={() => setisActive("Preproduction")}>
                <div onClick={() => setActive(0)}>
                  <p style={{ color: active === 0 ? "#02D4F8" : "#777777" }}>
                    Pre production
                  </p>
                </div>
              </div>
              <div onClick={() => setisActive("Production")}>
                <div onClick={() => setActive(1)}>
                  <p
                    onClick={() => setActiveColor(!activeColor)}
                    style={{ color: active === 1 ? "#02D4F8" : "#777777" }}
                  >
                    Production
                  </p>
                </div>
              </div>
              <div onClick={() => setisActive("Postproduction")}>
                <div onClick={() => setActive(2)}>
                  <p style={{ color: active === 2 ? "#02D4F8" : "#777777" }}>
                    Post production
                  </p>
                </div>
              </div>
            </div>

            {isActive === "Preproduction" && (
              <div className={styles.Preproduction}>
                <div className={styles.slider_content}>
                  {/* <div
                  className="arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => ref.current?.slickPrev()}
                >
                  <ArrowLeft />
                </div> */}

                  <Slider ref={ref} {...settings}>
                    {IApproachOurProject.map((f, index) => {
                      return (
                        <div key={index}>
                          <div className={styles.approachOur_flex_content}>
                            <div className={styles.approachOur_img}>
                              <Image
                                src={f.image.src}
                                alt={f.image.alt}
                                width={250}
                                height={223}
                              />
                            </div>
                            <div className={styles.approachour_content}>
                              <h5>{f.title}</h5>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  {/* <div
                  className="arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => ref.current?.slickNext()}
                >
                  <ArrowRight />
                </div> */}
                </div>

                <div className={styles.slider_content_media}>
                  <div
                    className={styles.arrow}
                    style={{ cursor: "pointer" }}
                    onClick={() => ref.current?.slickPrev()}
                  >
                    <Image
                      src={"/assets/icons/arrow-down-left.svg"}
                      alt="arrow"
                      width={34}
                      height={54}
                    />
                  </div>
                  <Slider ref={ref} {...settings}>
                    {IApproachOurProject.map((f, index) => {
                      return (
                        <div
                          key={index}
                          className={styles.approachOur_flex_content}
                        >
                          <div className={styles.approachOur_img}>
                            <Image
                              src={f.image.src}
                              alt={f.image.alt}
                              width={250}
                              height={223}
                            />
                          </div>
                          <div className={styles.approachour_content}>
                            <h5>{f.title}</h5>
                            <p>{f.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  <div
                    className={styles.arrow}
                    style={{ cursor: "pointer" }}
                    onClick={() => ref.current?.slickNext()}
                  >
                    <Image
                      src={"/assets/icons/arrow-down-right.svg"}
                      alt="arrow"
                      width={34}
                      height={54}
                    />
                  </div>
                </div>
              </div>
            )}

            {isActive === "Production" && (
              <div className={styles.Production}>
                <div className={styles.slider_content}>
                  {/* <div
                  className="arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => ref.current?.slickPrev()}
                >
                  <ArrowLeft />
                </div> */}

                  <Slider ref={ref} {...settings}>
                    {IProduction.map((f, index) => {
                      return (
                        <div key={index}>
                          <div className={styles.approachOur_flex_content}>
                            <div className={styles.approachOur_img}>
                              <Image
                                src={f.image.src}
                                alt={f.image.alt}
                                width={250}
                                height={223}
                              />
                            </div>
                            <div className={styles.approachour_content}>
                              <h5>{f.title}</h5>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  {/* <div
                  className="arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => ref.current?.slickNext()}
                >
                  <ArrowRight />
                </div> */}
                </div>

                <div className={styles.slider_content_media}>
                  <div
                    className={styles.arrow}
                    style={{ cursor: "pointer" }}
                    onClick={() => ref.current?.slickPrev()}
                  >
                    <Image
                      src={"/assets/icons/arrow-down-left.svg"}
                      alt="arrow"
                      width={34}
                      height={54}
                    />
                  </div>
                  <Slider ref={ref} {...settings}>
                    {IProduction.map((f, index) => {
                      return (
                        <div
                          key={index}
                          className={styles.approachOur_flex_content}
                        >
                          <div className={styles.approachOur_img}>
                            <Image
                              src={f.image.src}
                              alt={f.image.alt}
                              width={250}
                              height={223}
                            />
                          </div>
                          <div className={styles.approachour_content}>
                            <h5>{f.title}</h5>
                            <p>{f.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  <div
                    className={styles.arrow}
                    style={{ cursor: "pointer" }}
                    onClick={() => ref.current?.slickNext()}
                  >
                    <Image
                      src={"/assets/icons/arrow-down-right.svg"}
                      alt="arrow"
                      width={34}
                      height={54}
                    />
                  </div>
                </div>
              </div>
            )}

            {isActive === "Postproduction" && (
              <div className={styles.Postproduction}>
                <div className={styles.slider_content}>
                  {/* <div
                  className="arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => ref.current?.slickPrev()}
                >
                  <ArrowLeft />
                </div> */}

                  <Slider ref={ref} {...settings}>
                    {IPostProduction.map((f, index) => {
                      return (
                        <div
                          key={index}
                          className={styles.approachOur_flex_content}
                        >
                          <div className={styles.approachOur_img}>
                            <Image
                              src={f.image.src}
                              alt={f.image.alt}
                              width={250}
                              height={223}
                            />
                          </div>
                          <div className={styles.approachour_content}>
                            <h5>{f.title}</h5>
                            <p>{f.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  {/* <div
                  className="arrow"
                  style={{ cursor: "pointer" }}
                  onClick={() => ref.current?.slickNext()}
                >
                  <ArrowRight />
                </div> */}
                </div>

                <div className={styles.slider_content_media}>
                  <div
                    className={styles.arrow}
                    style={{ cursor: "pointer" }}
                    onClick={() => ref.current?.slickPrev()}
                  >
                    <Image
                      src={"/assets/icons/arrow-down-left.svg"}
                      alt="arrow"
                      width={34}
                      height={54}
                    />
                  </div>
                  <Slider ref={ref} {...settings}>
                    {IPostProduction.map((f, index) => {
                      return (
                        <div
                          key={index}
                          className={styles.approachOur_flex_content}
                        >
                          <div className={styles.approachOur_img}>
                            <Image
                              src={f.image.src}
                              alt={f.image.alt}
                              width={250}
                              height={223}
                            />
                          </div>
                          <div className={styles.approachour_content}>
                            <h5>{f.title}</h5>
                            <p>{f.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>

                  <div
                    className={styles.arrow}
                    style={{ cursor: "pointer" }}
                    onClick={() => ref.current?.slickNext()}
                  >
                    <Image
                      src={"/assets/icons/arrow-down-right.svg"}
                      alt="arrow"
                      width={34}
                      height={54}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div className="circle-content">
          <div
            className="circle-one circle"
            onClick={() => setActive(0)}
            style={{
              width: active === 0 ? "90px" : "80px",
              height: active === 0 ? "90px" : "80px",
            }}
          >
            <h5
              style={{
                background: active === 0 ? "#02D4F8" : "#1e1e1e",
                color: active === 0 ? "#1E1E1E" : "#777777",
                padding: active === 0 ? "18px" : "12px",
              }}
            >
              01
            </h5>
          </div>
          <div
            className="circle-two circle"
            onClick={() => setActive(1)}
            style={{
              width: active === 1 ? "90px" : "80px",
              height: active === 1 ? "90px" : "80px",
            }}
          >
            <h5
              style={{
                background: active === 1 ? "#02D4F8" : "#1e1e1e",
                color: active === 1 ? "#1E1E1E" : "#777777",
                padding: active === 1 ? "18px" : "12px",
              }}
            >
              02
            </h5>
          </div>
          <div className="circle-three circle" onClick={() => setActive(2)}>
            <h5
              style={{
                background: active === 2 ? "#02D4F8" : "#1e1e1e",
                color: active === 2 ? "#1E1E1E" : "#777777",
                padding: active === 2 ? "18px" : "12px",
              }}
            >
              03
            </h5>
          </div>
          <div
            className="circle-four circle"
            onClick={() => setActive(3)}
            style={{
              width: active === 3 ? "90px" : "80px",
              height: active === 3 ? "90px" : "80px",
            }}
          >
            <h5
              style={{
                background: active === 3 ? "#02D4F8" : "#1e1e1e",
                color: active === 3 ? "#1E1E1E" : "#777777",
                padding: active === 3 ? "18px" : "12px",
              }}
            >
              04
            </h5>
          </div>
          <div
            className="circle-five circle"
            onClick={() => setActive(4)}
            style={{
              width: active === 4 ? "90px" : "80px",
              height: active === 4 ? "90px" : "80px",
            }}
          >
            <h5
              style={{
                background: active === 4 ? "#02D4F8" : "#1e1e1e",
                color: active === 4 ? "#1E1E1E" : "#777777",
                padding: active === 4 ? "18px" : "12px",
              }}
            >
              05
            </h5>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ApprochOurProject;

function setisActive(arg0: string): void {
  throw new Error("Function not implemented.");
}
