"use client";
import style from "./style.module.css";
import srcChoose from "../../../public/chooseUs/star.webp";
import Image from "next/image";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/observer";

function ChooseUs() {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref);

  return (
    <section className={style.section}>
      <article className={style.article}>
        <picture className={style.picture}>
          <Image
            src={srcChoose}
            className={style.img}
            alt="person see why choose us"
          />
        </picture>
        <div
          ref={ref}
          className={
            style.containerText + " " + (isVisible ? style.active : "")
          }
        >
          <h2 className={style.title}>Por que elegirnos? </h2>
          <p className={style.text}>
            Somos una agencia de creación de software especializada en
            solucionar tus problemas y ofrecer soluciones dentro de nuestros
            servicios web.
          </p>
          {/* <button className={style.button}>Vea mas </button> */}
        </div>
      </article>
    </section>
  );
}

export default ChooseUs;
