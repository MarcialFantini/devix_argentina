import style from "./style.module.css";
import srcChoose from "../../../public/chooseUs/vector.png";
import Image from "next/image";

function ChooseUs() {
  return (
    <section className={style.section}>
      <article className={style.article}>
        <picture className={style.picture}>
          <Image
            src={srcChoose}
            className={style.img}
            alt="person see why choose us"
          />
        </picture>
        <div className={style.containerText}>
          <h2 className={style.title}>Why choose us</h2>
          <p className={style.text}>
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac
            libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu
            elit. Morbi aliquam porttitor mattis consequat neque, tellus
            blandit.
          </p>
          <button className={style.button}>Let’s connect </button>
        </div>
      </article>
    </section>
  );
}

export default ChooseUs;
