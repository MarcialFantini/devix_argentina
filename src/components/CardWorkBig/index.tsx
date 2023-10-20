"use client";
import Image from "next/image";
import style from "./style.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useIntersectionObserver } from "@/hooks/observer";
import { useRef } from "react";
import Link from "next/link";

function CardWorkBig({
  category,
  title,
  index,
  src,
}: {
  category: string;
  title: string;
  src: string | StaticImport;
  index: number;
}) {
  const ref = useRef(null);
  const { isVisible } = useIntersectionObserver(ref);

  return (
    <article
      ref={ref}
      className={style.article + " " + (isVisible ? style.active : "")}
    >
      <picture className={style.picture}>
        <Image className={style.img} src={src} alt=""></Image>
      </picture>
      <p className={style.category}> {category} </p>
      <h3 className={style.title}> {title} </h3>
      <p className={style.more}>
        <Link className={style.link} href={`/blog/${index}`}>
          Read more
        </Link>
      </p>
    </article>
  );
}

export default CardWorkBig;
