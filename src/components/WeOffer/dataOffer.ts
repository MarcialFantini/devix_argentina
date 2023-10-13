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
    text: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
  },
  {
    title: "Web development",
    src: item1,
    text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
  },
  {
    title: "Digital marketing",
    src: item2,
    text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
  },
  {
    title: "Mobile App",
    src: item3,
    text: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices",
  },
  {
    title: "SEO",
    src: item4,
    text: "Integer ante non nunc, eget est justo vel semper nunc. Lacus ",
  },
  {
    title: "User testing",
    src: item5,
    text: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.",
  },
];
