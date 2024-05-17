import Brand from "@/components/Brand";
import LandingContact from "@/components/sections/landing/LandingContact";
import LandingFAQ from "@/components/sections/landing/LandingFAQ";
import LandingFeatures from "@/components/sections/landing/LandingFeatures";
import LandingHero from "@/components/sections/landing/LandingHero";
import LandingPatenary from "@/components/sections/landing/LandingPatenary";
import LandingLayout from "@/layout/LandingLayout";
import Head from "next/head";

const Landing = (): JSX.Element => {
  return (
    <section className="landing w-screen overflow-hidden">
      <Head>
        <title>Bienvenue sur Lokaly</title>
      </Head>
      <LandingLayout>
        <LandingHero />
        <Brand />
        <LandingFeatures />
        <LandingPatenary />
        <LandingFAQ />
        <LandingContact />
      </LandingLayout>
    </section>
  );
};

export default Landing;
