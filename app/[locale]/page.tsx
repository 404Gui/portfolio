"use client";
import styles from "../page.module.css";
import { Header } from "../../components/Header/header";
import { Main } from "../../components/Main/page";
import { About } from "../../components/About/about";
import { Works } from "../../components/Works/works";
import { SectionCarousel } from "../../components/SectionCarousel/SectionCarousel";
import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/Footer/footer";
import { getTranslations } from 'next-intl/server';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <About />
      <Works />
      <SectionCarousel />
      <Footer />

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
