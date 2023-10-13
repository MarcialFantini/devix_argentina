import CardOffer from "../CardOffer";
import { data } from "./dataOffer";
import style from "./style.module.css";

function WeOffer() {
  return (
    <section className={style.sectionOffer}>
      <h2 className={style.title}>We Offer</h2>
      <p className={style.text}>
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
        semper orci a tincidunt.
      </p>

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
