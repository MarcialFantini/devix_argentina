import style from "./style.module.css";
import React from "react";

function BannerImage({
  src,
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className={style.containerBanner}
    >
      {children}
    </div>
  );
}

export default BannerImage;
