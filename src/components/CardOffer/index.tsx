import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import style from "./style.module.css";

interface props {
  title: string;
  src: string | StaticImport;
  text: string;
}

function CardOffer({ title, src, text }: props) {
  return (
    <article className={style.containerCard}>
      <picture>
        <Image src={src} alt={title}></Image>
      </picture>
      <h3 className={style.title}> {title} </h3>
      <p className={style.text}> {text} </p>
    </article>
  );
}

export default CardOffer;
