import Image from "next/image";
import style from "./style.module.css";

import srcItem1 from "../../../public/hero/orange.png";
import srcItem2 from "../../../public/hero/purple.png";

function HeroHome() {
  return (
    <header id="home" className={style.headerContainer}>
      <picture className={style.picture + " " + style.picture1}>
        <Image
          className={style.img}
          src={srcItem1}
          alt="decoration header"
        ></Image>
      </picture>
      <picture className={style.picture + " " + style.picture2}>
        <Image
          className={style.img}
          src={srcItem2}
          alt="decoration header"
        ></Image>
      </picture>

      <div className={style.containerText}>
        <h1 className={style.title}>
          Devix <span className={style.span}>Argentina</span>
        </h1>
        <p className={style.text}>
          Socios Argentinos dedicados al desarrollo web y al marketing digital
          con mucha experiencia solucionando problemas.
        </p>
      </div>
    </header>
  );
}

export default HeroHome;
