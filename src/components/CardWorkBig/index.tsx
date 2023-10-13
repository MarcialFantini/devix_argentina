import Image from "next/image";
import style from "./style.module.css";

function CardWorkBig({
  category,
  title,
  isImg,
}: {
  category: string;
  title: string;
  isImg?: boolean;
}) {
  return (
    <article className={style.article}>
      {isImg ? (
        <picture className={style.picture}>
          <Image className={style.img} src={""} alt=""></Image>
        </picture>
      ) : (
        ""
      )}
      <p className={style.category}> {category} </p>
      <h3 className={style.title}> {title} </h3>
      <p className={style.more}>Read more</p>
    </article>
  );
}

export default CardWorkBig;
