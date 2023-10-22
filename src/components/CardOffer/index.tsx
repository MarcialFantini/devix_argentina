"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import style from "./style.module.css";
import { useIntersectionObserver } from "@/hooks/observer";
import { useRef, useState } from "react";
import Link from "next/link";

interface props {
  title: string;
  src: string | StaticImport;
  text: string;
  index: number;
}

function CardOffer({ title, src, text, index }: props) {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref);
  return (
    <article
      ref={ref}
      className={
        style.containerCard + " " + (isVisible ? style.activeCard : "")
      }
    >
      <picture>
        <Image src={src} alt={title}></Image>
      </picture>
      <h3 className={style.title}> {title} </h3>
      <p className={style.text}> {text} </p>
      <Link className={style.link} href={`/services/${index}`}>
        Leer mas{" "}
      </Link>
    </article>
  );
}

export default CardOffer;
