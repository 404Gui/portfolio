// app/page.tsx (Server Component)
import styles from "../page.module.css";
import { Header } from "../../components/Header/header";
import { Main } from "../../components/Main/page";
import { About } from "../../components/About/about";
import { Works } from "../../components/Works/works"
import { SectionCarousel } from "../../components/SectionCarousel/SectionCarousel";
import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/Footer/footer";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const tHeader = await getTranslations("header");
  const tMain = await getTranslations("main");
  const tAbout = await getTranslations("about");
  const tWorks = await getTranslations("projects");
  const tCarousel = await getTranslations("projects");
  const tFooter = await getTranslations("footer");

  return (
    <div className={styles.page}>
      <Header t={tHeader} />
      <Main t={tMain} />
      <About t={tAbout} />
      <Works t={tWorks} />
      <SectionCarousel t={tCarousel} />
      <Footer t={tFooter} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
