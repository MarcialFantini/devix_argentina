"use client";
import { useRef } from "react";
import style from "./style.module.css";
import { useIntersectionObserver } from "@/hooks/observer";

function BarHomeCompany() {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref);

  return (
    <section id="compañía" className={style.section}>
      <div className={style.containerAll}>
        <div>
          <h2
            ref={ref}
            className={style.title + " " + (isVisible ? style.active : "")}
          >
            Desarrolladores con mucha experiencia
          </h2>
        </div>
        <div>
          <p className={style.text + " " + (isVisible ? style.active : "")}>
            Somos Desarrolladores con mucha experiencia solucionando problemas y
            dando los mejores servicios, destinado a medida para cada
            requerimiento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BarHomeCompany;
