import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cta from "../components/cta";
import AIOutput from "../components/aiOutput";
import PopupWidget from "../components/popupWidget";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [frameCount, setFrameCount] = useState(0); // State variable to hold the frame count

  return (
    <>
      <Head>
        <title>BrieAI App</title>
        <meta name="description" content="BrieAI App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Cta setFrameCount={setFrameCount}/>
      {frameCount !== 0 && <AIOutput frameCount={frameCount}/>} {/* Conditionally render AIOutput */}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
