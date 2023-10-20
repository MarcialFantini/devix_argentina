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
            alt=""
          ></Image>
        </picture>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          laboriosam assumenda ipsum veniam illum illo sed, sint non id
          molestias ad quasi nostrum vel corporis nulla. Placeat in consectetur
          consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque
          in neque provident molestiae corporis! Magni inventore architecto non,
          sit consequuntur totam eveniet suscipit accusamus, sequi eaque dolorem
          explicabo provident?
        </p>
      </article>
    </section>
  );
}

export default BlogRouter;
