import Head from "next/head";
import AwardSection from "../components/AwardSection";
import Footer from "../components/Footer";
import FooterMedia from "../components/FooterMedia";
import NavBar from "../components/NavBarTop";
import ProviderSection from "../components/ProviderSection";
import SectionTiso from "../components/SectionTiso";
import Slider from "../components/Slider";


export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>TransworldInternationalSportsOrg</title>
        <meta
          name="description"
          content="Transworld International Sports organization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NAVBAR  */}
      <NavBar />
      {/* CAROUSEL  */}
      <Slider />
      <main className="">
        <div className="container mx-auto " data-aos="fade-in">
          <SectionTiso />
        </div>
        <div className="w-full bg-gray-200 py-4 my-10">
          <div className="container mx-auto">
            <AwardSection />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mb-10">
          <ProviderSection />
        </div>
        <div className="w-full bg-[#23282d] py-4 ">
          <div className="container mx-auto">
            <Footer />
          </div>
          <div className="mt-4 border-b border-gray-500" />
          <div className="container mx-auto flex justify-between px-5 md:px-0 mt-2">
            <div className="text-sm text-gray-500">
              Copyright @2022 MadeBy V.E
            </div>
            <FooterMedia />
          </div>
        </div>
      </main>
    </div>
  );
}
