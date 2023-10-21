import { StaticImport } from "next/dist/shared/lib/get-img-props";

import item1 from "../../../public/WeOffer/Frame-1.png";
import item2 from "../../../public/WeOffer/Frame-2.png";
import item3 from "../../../public/WeOffer/Frame-3.png";
import item4 from "../../../public/WeOffer/Frame-4.png";
import item5 from "../../../public/WeOffer/Frame-5.png";
import item6 from "../../../public/WeOffer/Frame.png";

interface props {
  title: string;
  src: string | StaticImport;
  text: string;
}

export const data: props[] = [
  {
    title: "Branding",
    src: item6,
    text: "Brindamos y nos ajustamos a tus estilos para tus paginas web que desarrollaremos.",
  },
  {
    title: "SEO",
    src: item4,
    text: "Integramos tecnologías para que puedas aparecer de mejor manera en los buscadores de internet. ",
  },

  {
    title: "Digital marketing",
    src: item2,
    text: "Nos encargamos de planear y ejecutar tus estrategias de marketing digital.",
  },
  {
    title: "Landing page",
    src: item1,
    text: "Creamos tu primera pagina web para que tengas una presencia web y consigas mas clientes. ",
  },
  {
    title: "Blogs",
    src: item3,
    text: "Servicio de creación de blog, newsletter o sistema en el cual vas a poder comunicar temas a tus posibles clientes.",
  },

  {
    title: "eCommerce",
    src: item5,
    text: "Servicio de creación de eCommerce, en el cual nos encargamos de crear para que puedas vender tus servicios y productos. ",
  },
];
