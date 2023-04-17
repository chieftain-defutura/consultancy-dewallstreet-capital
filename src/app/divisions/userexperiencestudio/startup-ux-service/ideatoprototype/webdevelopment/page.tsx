import React from "react";
import Image from "next/image";
import ChallangeAndSolutions from "@/components/Challanges&Solutions";

const WebDevelopment = () => {
  return (
    <div>
      <div className="webdevelopment-hero" style={{ marginTop: "71px" }}>
        <Image
          src={"/assets/icons/logo-dark.svg"}
          alt="Logodark"
          width={200}
          height={40}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://ik.imagekit.io/d4cf2o3ja/web-development.mp4?updatedAt=1680263299603"
            type="video/mp4"
          />
        </video>
      </div>
      <ChallangeAndSolutions />
    </div>
  );
};

export default WebDevelopment;
