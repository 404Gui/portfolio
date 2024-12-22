import About from "@/components/About/about";
import Header from "@/components/Header/header";
import Main from "@/components/Main/page";
import Works from "@/components/Works/works";

export default function Home() {
    return(
        <div>
            <Header />
            <Main />
            <About />
            {/* <Works /> */}
            {/* <SectionWithCarousel /> */}
        </div>
    )
}