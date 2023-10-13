import style from "./style.module.css";
function ContactCard() {
  return (
    <section className={style.containerSection}>
      <h2 className={style.title}>Contact</h2>
      <p className={style.item}>+555555- 555 -555</p>
      <p className={style.item}>Email@gmail.com</p>
    </section>
  );
}

export default ContactCard;
