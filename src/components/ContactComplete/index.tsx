import ContactCard from "../ContactCard";
import FormComponent from "../ContactForm";
import style from "./style.module.css";

function ContactComplete() {
  return (
    <section id={"contact"} className={style.section}>
      <div className={style.containerAll}>
        <ContactCard></ContactCard>
        <FormComponent></FormComponent>
      </div>
    </section>
  );
}

export default ContactComplete;
