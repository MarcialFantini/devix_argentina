import style from "./style.module.css";

function HeroHome() {
  return (
    <header className={style.headerContainer}>
      <div className={style.containerText}>
        <h1 className={style.title}>
          Attract <span className={style.span}>NewLeads</span> like never before{" "}
        </h1>
        <p className={style.text}>
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
          feugiat scelerisque in elit. Morbi rhoncus, tellus, eros{" "}
        </p>
        <div className={style.row}>
          <input placeholder="Email" className={style.input} type="text" />
          <button className={style.button}>Attract</button>
        </div>
      </div>
    </header>
  );
}

export default HeroHome;
