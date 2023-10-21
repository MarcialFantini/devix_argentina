"use client";

import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";

function BannerVideo({ src }: { src: string }) {
  return (
    <div className={style.containerVideo}>
      <video className={style.video} loop autoPlay muted>
        <source src={src} type="video/webm" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default BannerVideo;
