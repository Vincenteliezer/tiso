import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBarTop";
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
      <NavBar />
      <main className="max-w-7xl mx-auto">
        {/* NAVBAR  */}

        <Carousel />
      </main>
      <div></div>
    </div>
  );
}
