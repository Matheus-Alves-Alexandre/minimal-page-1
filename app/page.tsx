import Image from "next/image";
import Navbar from "./Navbar";
import { Hero } from "./Hero";
import About from "./About";
import Experience from "./Experience";
import OurValue from "./OurValue";
import OurWork from "./OurWork";
import CeoValue from "./CeoValue";
import { Contact } from "./Contact";

export default function Home() {
  return (
    <main className="">
      <div className=" z-0 bg-gray-200">
        <div>
          <Navbar />

          <section id="hero">
            <Hero />
          </section>
        </div>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="ourValue">
          <OurValue />
        </section>
        <section id="ourWork">
          <OurWork />
        </section>
        <section id="ceoValue">
          <CeoValue />
        </section>
        {/* <Contact /> */}
      </div>
    </main>
  );
}
