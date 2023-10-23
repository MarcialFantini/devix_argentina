"use client";

import { useState } from "react";
import CardOffer from "../CardOffer";
import { data1, data2 } from "./dataOffer";
import style from "./style.module.css";

function WeOffer() {
  return (
    <section id="servicios" className={style.sectionOffer}>
      <h2 className={style.title}>Nuestros servicios</h2>
      <p className={style.text}>
        Creamos o remodelamos el apartado digitalizado de tu negocio.
      </p>
      <h4 style={{ padding: "35px 0 0 0" }}>
        Exprimimos tu potencial de ventas
      </h4>
      <div style={{ padding: "0 0 50px 0" }} className={style.gridOffer}>
        {data1.map((item, index) => {
          return (
            <CardOffer
              index={item.index}
              key={item.title + index}
              title={item.title}
              src={item.src}
              text={item.text}
            ></CardOffer>
          );
        })}
      </div>
      <h4>Tipos de Paginas</h4>
      <div className={style.gridOffer}>
        {data2.map((item, index) => {
          return (
            <CardOffer
              index={item.index}
              key={item.title + index}
              title={item.title}
              src={item.src}
              text={item.text}
            ></CardOffer>
          );
        })}
      </div>
    </section>
  );
}

export default WeOffer;
