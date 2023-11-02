import Image from "next/image";
import style from "./style.module.css";

import social1 from "../../../public/social/email.svg";
import social2 from "../../../public/social/ig.svg";
import social3 from "../../../public/social/facebook.png";
import social4 from "../../../public/social/linkedin.png";
function ContactCard() {
  return (
    <section className={style.containerSection}>
      <h2 className={style.title}>Contacto</h2>

      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social1} alt=""></Image>
        </picture>{" "}
        <a href="mailto:devixargentina@gmail.com" className={style.item}>
          devixargentina@gmail.com
        </a>
      </div>
      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social2} alt=""></Image>
        </picture>
        <a
          href="https://www.instagram.com/devix_argentina/"
          target="_blank"
          className={style.item}
        >
          devix_argentina
        </a>
      </div>
      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social3} alt=""></Image>
        </picture>{" "}
        <a
          href="https://www.facebook.com/devix.argentina"
          target="_blank"
          className={style.item}
        >
          Devix Argentina
        </a>
      </div>
      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social4} alt=""></Image>
        </picture>
        <a
          href="https://www.linkedin.com/in/devix-argentina-66504a297/"
          target="_blank"
          className={style.item}
        >
          Devix Argentina
        </a>
      </div>
    </section>
  );
}

export default ContactCard;
