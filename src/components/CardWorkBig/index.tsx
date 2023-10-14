import Image from "next/image";
import style from "./style.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function CardWorkBig({
  category,
  title,

  src,
}: {
  category: string;
  title: string;
  src: string | StaticImport;
}) {
  return (
    <article className={style.article}>
      <picture className={style.picture}>
        <Image className={style.img} src={src} alt=""></Image>
      </picture>
      <p className={style.category}> {category} </p>
      <h3 className={style.title}> {title} </h3>
      {/* <p className={style.more}>Read more</p> */}
    </article>
  );
}

export default CardWorkBig;
