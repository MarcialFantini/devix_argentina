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
        <p className={style.item}> devixargentina@gmail.com</p>
      </div>
      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social2} alt=""></Image>
        </picture>
        <p className={style.item}> devix_argentina</p>
      </div>
      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social3} alt=""></Image>
        </picture>{" "}
        <p className={style.item}> Devix Argentina</p>
      </div>
      <div className={style.row}>
        <picture>
          <Image className={style.img} src={social4} alt=""></Image>
        </picture>
        <p className={style.item}> Devix Argentina</p>
      </div>
    </section>
  );
}

export default ContactCard;
