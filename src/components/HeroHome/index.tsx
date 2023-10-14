import style from "./style.module.css";

function HeroHome() {
  return (
    <header id="home" className={style.headerContainer}>
      <div className={style.containerText}>
        <h1 className={style.title}>
          Devix <span className={style.span}>Argentina</span>
        </h1>
        <p className={style.text}>
          Socios Argentinos dedicados al desarrollo web y al marketing digital.
        </p>
      </div>
    </header>
  );
}

export default HeroHome;
