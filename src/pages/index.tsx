import ArrowLeftIcon from "@/components/icons/arrow_left";
import ArrowRightIcons from "@/components/icons/arrow_right";
import GlassIcon from "@/components/icons/glass";
import HotelsIcon from "@/components/icons/hotels";
import MapsIcon from "@/components/icons/maps";
import MaskIcon from "@/components/icons/mask";
import StarIcon from "@/components/icons/star";
import AboutSection from "@/components/pages/about";
import CardItenary from "@/components/pages/card/card_itenary";
import CommentSection from "@/components/pages/comment";
import Footer from "@/components/pages/footer";
import Hero from "@/components/pages/hero";
import ItenarySection from "@/components/pages/itenary";
import Navbar from "@/components/pages/navbar";
import Head from "next/head";
import { useState } from "react";

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <AboutSection />
        <ItenarySection />
        <CommentSection />
        <Footer />
      </main>
    </>
  );
}
