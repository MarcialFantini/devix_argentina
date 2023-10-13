import style from "./style.module.css";

function Discuss() {
  return (
    <section className={style.section}>
      <article className={style.article}>
        <h2 className={style.title}>Let’s discuss the idea</h2>
        <p className={style.text}>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit.
        </p>
        <div className={style.row}>
          <input className={style.input} type="text" name="" id="" />
          <button className={style.btn}>Send</button>
        </div>
      </article>
    </section>
  );
}

export default Discuss;
