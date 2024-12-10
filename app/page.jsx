import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Main from "@/components/Main/page";
import Aside from "@/components/Aside/aside";
import Card from "@/components/Card/card";
import About from "@/components/About/about";
import Works from "@/components/Works/works";
import Estudos from "@/components/Estudos/estudos";
import Footer from "@/components/Footer/footer";
import MyCarouselTwo from "@/components/Carro/Carro";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <About />
      <Works />
      {/* <Footer /> */}
      {/* <MyCarouselTwo /> */}
      {/* <Card />      */}
      {/* <Aside /> */}
      {/* <Estudos /> */}
    </div>
  );
}
