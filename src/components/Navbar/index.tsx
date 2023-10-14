"use client";

import Image from "next/image";
import React, { useState } from "react";
import srcIconNav from "../../../public/navbar/Frame.png";

import style from "./style.module.css";
import { smoothScrollToElement } from "@/utils/scrollToElement";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handlerToggleActive = () => setIsActive((prev) => !prev);
  const handlerToggleScroll = (id: string) => () => {
    handlerToggleActive();
    smoothScrollToElement(id);
  };

  const handlerScroll = (id: string) => () => smoothScrollToElement(id);

  return (
    <>
      <nav className={style.containerNav}>
        <div className={style.containerAll}>
          <div
            onClick={handlerScroll("home")}
            className={style.containerIconTitle}
          >
            <picture className={style.picture}>
              <Image
                className={style.img}
                src={srcIconNav}
                alt="icon nav"
              ></Image>
            </picture>
            <h2 className={style.title}>Devix</h2>
          </div>

          <ul className={style.list}>
            <li onClick={handlerScroll("compañía")}>Compañía</li>
            <li onClick={handlerScroll("servicios")}>Servicios</li>
            <li onClick={handlerScroll("proyectos")}>Proyectos</li>
            <li onClick={handlerScroll("contact")}>
              <button className={style.button}>Contacto</button>
            </li>
          </ul>
          <button onClick={handlerToggleActive} className={style.buttonActive}>
            |||
          </button>
        </div>
      </nav>
      <ul style={{ right: isActive ? 0 : "-100%" }} className={style.secondary}>
        <li onClick={handlerToggleScroll("compañía")}>Compañía</li>
        <li onClick={handlerToggleScroll("servicios")}>Servicios</li>
        <li onClick={handlerToggleScroll("proyectos")}>Proyectos</li>
        <li onClick={handlerToggleScroll("contact")}>
          <button className={style.button}>Contacto</button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;