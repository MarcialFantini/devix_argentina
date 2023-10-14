import CardOffer from "../CardOffer";
import { data } from "./dataOffer";
import style from "./style.module.css";

function WeOffer() {
  return (
    <section id="servicios" className={style.sectionOffer}>
      <h2 className={style.title}>Nuestros servicios</h2>
      <p className={style.text}>Servicios web de calidad hecho a tu medida</p>

      <div className={style.gridOffer}>
        {data.map((item, index) => {
          return (
            <CardOffer
              key={item.title + index}
              title={item.title}
              src={item.src}
              text={item.text}
            ></CardOffer>
          );
        })}
      </div>
    </section>
  );
}

export default WeOffer;
