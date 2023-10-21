import Image from "next/image";
import style from "./style.module.css";

import srcDefault from "../../../public/banner/code.webp";

function Services() {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Title</h2>

      <div className={style.containerGrid}>
        <article>
          <header>
            <h2>Title</h2>
          </header>
          <main>
            <picture>
              <Image className={style.img} src={srcDefault} alt=""></Image>
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              vero vitae consequuntur totam, sit ipsam facere similique modi
              labore ratione non omnis minus, quaerat excepturi accusamus
              repellat sapiente facilis dolor.
            </p>
          </main>
        </article>

        <article>
          <header>
            <h2>Title</h2>
          </header>
          <main>
            <picture>
              <Image className={style.img} src={srcDefault} alt=""></Image>
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              vero vitae consequuntur totam, sit ipsam facere similique modi
              labore ratione non omnis minus, quaerat excepturi accusamus
              repellat sapiente facilis dolor.
            </p>
          </main>
        </article>
        <article>
          <header>
            <h2>Title</h2>
          </header>
          <main>
            <picture>
              <Image className={style.img} src={srcDefault} alt=""></Image>
            </picture>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              vero vitae consequuntur totam, sit ipsam facere similique modi
              labore ratione non omnis minus, quaerat excepturi accusamus
              repellat sapiente facilis dolor.
            </p>
          </main>
        </article>
      </div>
    </section>
  );
}

export default Services;
