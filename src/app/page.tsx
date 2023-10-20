import HeroHome from "@/components/HeroHome";
import styles from "./page.module.css";
import BarHomeCompany from "@/components/BarHomeCompany";
import WeOffer from "@/components/WeOffer";
import ChooseUs from "@/components/ChooseUs";
import OurWork from "@/components/OurWork";
import BannerImage from "@/components/BannerImage";

import ContactCard from "@/components/ContactCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome></HeroHome>
      <WeOffer></WeOffer>
      <BarHomeCompany></BarHomeCompany>
      <BannerImage src={"/banner/work.webp"}></BannerImage>
      <ChooseUs></ChooseUs>
      <BannerImage src={"/banner/code.webp"}></BannerImage>
      <OurWork></OurWork>
      <BannerImage src={"/banner/contact.webp"}>
        {<ContactCard></ContactCard>}
      </BannerImage>

      {/* <Discuss></Discuss> */}
    </main>
  );
}
