import style from "./style.module.css";

function BarHomeCompany() {
  return (
    <section className={style.section}>
      <div className={style.containerAll}>
        <div>
          <h2 className={style.title}>Desarrolladores con mucha experiencia</h2>
        </div>
        <div>
          <p className={style.text}>
            Somos Desarrolladores con mucha experiencia en solucionando
            problemas y dando los mejores servicios, destinado a medida para
            cada requerimiento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BarHomeCompany;
