import Image from "next/image";
import style from "./style.module.css";

import { list } from "../data";

function BlogRouter({ params }: { params: { index: number } }) {
  return (
    <section className={style.containerSection}>
      <article className={style.article}>
        <h1 className={style.title}>{list[params.index].title}</h1>
        <h3 className={style.subtitle}>Web site</h3>
        <picture className={style.picture}>
          <Image
            className={style.img}
            src={list[params.index].src}
            alt={list[params.index].title}
          ></Image>
        </picture>
        {list[params.index].text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default BlogRouter;
