import Image from "next/image";
import style from "./style.module.css";

import social1 from "../../../public/social/email.svg";
import social2 from "../../../public/social/ig.svg";

function ContactCard() {
  return (
    <section id="contact" className={style.containerSection}>
      <h2 className={style.title}>Contact</h2>
      {/* <p className={style.item}>+555555- 555 -555</p> */}
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
    </section>
  );
}

export default ContactCard;
