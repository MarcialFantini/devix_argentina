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
  index: number;
}

export const data1: props[] = [
  {
    index: 0,
    title: "Digital marketing",
    src: item2,
    text: "Estrategia global que incluye branding, SEO y otros elementos para el éxito en línea.",
  },
  {
    index: 1,
    title: "Branding",
    src: item6,
    text: "Construcción de identidad de marca en línea para conectar con la audiencia.",
  },
  {
    index: 2,
    title: "SEO",
    src: item4,
    text: "Optimización web para mejorar visibilidad en motores de búsqueda y atraer tráfico orgánico.",
  },
];

export const data2 = [
  {
    index: 3,
    title: "Landing page",
    src: item1,
    text: "Creamos tu primera pagina web para que tengas una presencia web y consigas mas clientes. ",
  },
  {
    index: 4,
    title: "Blogs",
    src: item3,
    text: "Servicio de creación de blog, newsletter o sistema en el cual vas a poder comunicar temas a tus posibles clientes.",
  },

  {
    index: 5,
    title: "eCommerce",
    src: item5,
    text: "Servicio de creación de eCommerce, en el cual nos encargamos de crear para que puedas vender tus servicios y productos. ",
  },
];
