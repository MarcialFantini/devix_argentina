import HeroHome from "@/components/HeroHome";
import styles from "./page.module.css";
import BarHomeCompany from "@/components/BarHomeCompany";
import WeOffer from "@/components/WeOffer";
import ChooseUs from "@/components/ChooseUs";
import OurWork from "@/components/OurWork";
import Discuss from "@/components/Discuss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome></HeroHome>
      <BarHomeCompany></BarHomeCompany>
      <WeOffer></WeOffer>
      <ChooseUs></ChooseUs>
      <OurWork></OurWork>
      <Discuss></Discuss>
    </main>
  );
}
