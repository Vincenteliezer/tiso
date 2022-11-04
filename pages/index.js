import Head from "next/head";
import Image from "next/image";
import AwardSection from "../components/AwardSection";
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
        <div className="container mx-auto">
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
      </main>
    </div>
  );
}
