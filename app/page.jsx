import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Main from "@/components/Main/page";
import About from "@/components/About/about";
import Works from "@/components/Works/works";
import SectionCarousel from "@/components/SectionCarousel/SectionCarousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <About />
      <Works />
      <SectionCarousel />
    </div>
  );
}
