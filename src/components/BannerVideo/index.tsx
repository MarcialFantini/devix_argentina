"use client";

import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

function BannerVideo({
  src,
  children,
  invert,
}: {
  src: string;
  invert?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={style.containerVideo}>
      <video
        style={{ transform: invert ? "scaleX(-1)" : "" }}
        className={style.video}
        loop
        autoPlay
        muted
      >
        <source src={src} type="video/webm" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className={style.containerRelative}>{children}</div>
    </div>
  );
}

export default BannerVideo;
