"use client";

import Image from "next/image";
import React, { useState } from "react";
import srcIconNav from "../../../public/navbar/Frame.svg";

import style from "./style.module.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handlerToggleActive = () => setIsActive((prev) => !prev);

  return (
    <>
      <nav className={style.containerNav}>
        <div className={style.containerAll}>
          <div className={style.containerIconTitle}>
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
            <li>Company</li>
            <li>Services</li>
            <li>Resources</li>
            <li>
              <button className={style.button}>Contact</button>
            </li>
          </ul>
          <button onClick={handlerToggleActive} className={style.buttonActive}>
            |||
          </button>
        </div>
      </nav>
      <ul style={{ right: isActive ? 0 : "-100%" }} className={style.secondary}>
        <li onClick={handlerToggleActive}>Company</li>
        <li onClick={handlerToggleActive}>Services</li>
        <li onClick={handlerToggleActive}>Resources</li>
        <li onClick={handlerToggleActive}>
          <button className={style.button}>Contact</button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
