import style from "./style.module.css";
import CardWorkBig from "../CardWorkBig";

import srcImage1 from "./item1.png";
import srcImage2 from "./item2.png";
import srcImage3 from "./item3.png";
import srcImage4 from "./item4.png";
import srcImage5 from "./item5.png";

function OurWork() {
  return (
    <section id="proyectos" className={style.section}>
      <div className={style.containerGrid}>
        <div className={style.column + " " + style.columnFirst}>
          <h2 className={style.title}>Alguno de nuestros proyectos:</h2>
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
