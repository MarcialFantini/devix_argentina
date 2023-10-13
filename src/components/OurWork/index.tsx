import style from "./style.module.css";
import CardWorkBig from "../CardWorkBig";

function OurWork() {
  return (
    <section className={style.section}>
      <div className={style.containerGrid}>
        <div className={style.column + " " + style.columnFirst}>
          <h2 className={style.title}>Some pieces of our work</h2>
          <p className={style.text}>
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
            consequat magna semper orci a tincidunt.
          </p>
          <button className={style.btn}>Show More</button>
        </div>
        <div className={style.column}>
          <CardWorkBig
            isImg={true}
            category="Website"
            title="Creative landing page"
          ></CardWorkBig>
          <CardWorkBig
            category="Website"
            title="Creative landing page"
          ></CardWorkBig>
          <CardWorkBig
            category="Website"
            title="Creative landing page"
          ></CardWorkBig>
        </div>
        <div className={style.column}>
          <CardWorkBig
            category="Website"
            title="Creative landing page"
          ></CardWorkBig>
          <CardWorkBig
            isImg={true}
            category="Website"
            title="Creative landing page"
          ></CardWorkBig>
          <CardWorkBig
            category="Website"
            title="Creative landing page"
          ></CardWorkBig>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
