import style from "./style.module.css";
import CardWorkBig from "../CardWorkBig";

import srcImage1 from "../../../public/works/item1.webp";
import srcImage2 from "../../../public/works/item2.webp";
import srcImage3 from "../../../public/works/item3.webp";
import srcImage4 from "../../../public/works/item4.webp";
import srcImage5 from "../../../public/works/item5.webp";

function OurWork() {
  return (
    <section id="proyectos" className={style.section}>
      <div className={style.containerGrid}>
        <div className={style.column + " " + style.columnFirst}>
          <h2 className={style.title}>Algunos de nuestros proyectos:</h2>
          <p className={style.text}>
            Estos son modelos paradigmáticos de paginas web las cuales podemos
            crear, y adaptarlas bajo tus parámetros de forma ideal para tu
            negocio.
          </p>
          {/* <button className={style.btn}>Show More</button> */}
        </div>
        <div className={style.column}>
          <CardWorkBig
            index={0}
            category="Website"
            title="My City Lawyers Directory"
            src={srcImage1}
          ></CardWorkBig>
          <CardWorkBig
            index={1}
            src={srcImage2}
            category="Website"
            title="Zjox Softwarks"
          ></CardWorkBig>
          <CardWorkBig
            index={2}
            src={srcImage3}
            category="Website"
            title="Cultivating A Sustainable Future "
          ></CardWorkBig>
        </div>
        <div className={style.column}>
          <CardWorkBig
            index={3}
            src={srcImage4}
            category="Website"
            title="AVJI "
          ></CardWorkBig>
          <CardWorkBig
            index={4}
            src={srcImage5}
            category="Website"
            title="Power up with coffee"
          ></CardWorkBig>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
