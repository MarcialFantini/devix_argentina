import Image from "next/image";
import { data } from "./data";
import style from "./style.module.css";

function ServicesRouter({ params }: { params: { id: number } }) {
  return (
    <section className={style.containerSection}>
      <article className={style.article}>
        <h1 className={style.title}>{data[params.id].title}</h1>
        <h3 className={style.subtitle}>Web site</h3>
        <picture className={style.picture}>
          <Image
            className={style.img}
            src={data[params.id].src}
            alt={data[params.id].title}
          ></Image>
        </picture>

        {data[params.id].text.map((item, key) => {
          return <p key={key}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default ServicesRouter;
