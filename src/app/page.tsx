import HeroHome from "@/components/HeroHome";
import styles from "./page.module.css";
import BarHomeCompany from "@/components/BarHomeCompany";
import WeOffer from "@/components/WeOffer";
import ChooseUs from "@/components/ChooseUs";
import OurWork from "@/components/OurWork";
import BannerImage from "@/components/BannerImage";

import BannerVideo from "@/components/BannerVideo";

import FormComponent from "@/components/ContactForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome></HeroHome>
      <WeOffer></WeOffer>
      <BarHomeCompany></BarHomeCompany>
      <BannerVideo src={"/banner/code.webm"}></BannerVideo>

      <ChooseUs></ChooseUs>
      <BannerImage src={"/banner/code.webp"}></BannerImage>
      <OurWork></OurWork>

      <FormComponent></FormComponent>
    </main>
  );
}
