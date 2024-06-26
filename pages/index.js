import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
//import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>BrieAI</title>
        <meta name="description" content="BrieAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Why BrieAI" title="Join the Wave">
        BrieAI is the best revolution in exercise since the invention of AI. We
        aim to use machine learning and artificial intelligence to optimize your
        worksouts, ensuring that you get the best pump each time, every time.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to get the most out of BrieAI"
      >
        Upload, submit, learn. It's that easy.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        From students to athletes to busy professionals, BrieAI is for everyone.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        You have questions. We have your answers:
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
