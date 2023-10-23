"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import srcIconNav from "../../../public/navbar/Frame.png";

import style from "./style.module.css";
import { smoothScrollToElement } from "@/utils/scrollToElement";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  const handlerToggleActive = () => setIsActive((prev) => !prev);
  const handlerToggleScroll = (id: string) => () => {
    handlerToggleActive();
    smoothScrollToElement(id);
  };

  const handlerScroll = (id: string) => () => {
    smoothScrollToElement(id);
  };

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
            {pathname !== "/" ? (
              <Link href={"/"}>
                <h2 className={style.title}>Devix</h2>
              </Link>
            ) : (
              <h2 className={style.title}>Devix</h2>
            )}
          </div>

          <ul className={style.list}>
            <li onClick={handlerScroll("servicios")}>
              {pathname === "/" ? (
                "Servicios"
              ) : (
                <Link href={"/"}>Servicios</Link>
              )}
            </li>
            <li onClick={handlerScroll("proyectos")}>
              {pathname === "/" ? (
                "Proyectos"
              ) : (
                <Link href={"/"}>Proyectos</Link>
              )}
            </li>
            <li onClick={handlerScroll("contact")}>
              <button className={style.button}>
                {" "}
                {pathname === "/" ? (
                  "Contacto"
                ) : (
                  <Link className={style.Link} href={"/"}>
                    Contacto
                  </Link>
                )}
              </button>
            </li>
          </ul>
          <button onClick={handlerToggleActive} className={style.buttonActive}>
            |||
          </button>
        </div>
      </nav>
      <ul style={{ right: isActive ? 0 : "-100%" }} className={style.secondary}>
        <li onClick={handlerToggleScroll("servicios")}>
          {" "}
          {pathname === "/" ? (
            "Servicios"
          ) : (
            <Link className={style.linkList} href={"/"}>
              Servicios
            </Link>
          )}
        </li>
        <li onClick={handlerToggleScroll("proyectos")}>
          {pathname === "/" ? (
            "Proyectos"
          ) : (
            <Link className={style.linkList} href={"/"}>
              Proyectos
            </Link>
          )}
        </li>
        <li onClick={handlerToggleScroll("contact")}>
          <button className={style.button}>
            {pathname === "/" ? (
              "Contacto"
            ) : (
              <Link className={style.linkList} href={"/"}>
                Contacto
              </Link>
            )}
          </button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
