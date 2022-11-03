import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBarTop";
import SectionTiso from "../components/SectionTiso";
import Carousel from "../components/Slider";

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
      <main className="mx-auto max-w-7xl">
        {/* CAROUSEL  */}
        <Carousel />
        <div>
          <SectionTiso />
        </div>
      </main>
    </div>
  );
}
