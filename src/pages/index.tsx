import Brand from "@/components/Brand";
import LandingFeatures from "@/components/sections/landing/LandingFeatures";
import LandingHero from "@/components/sections/landing/LandingHero";
import LandingPatenary from "@/components/sections/landing/LandingPatenary";
import LandingLayout from "@/layout/LandingLayout";
import Head from "next/head";

const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <Head>
        <title>Bienvenue sur Lokaly</title>
      </Head>
      <LandingLayout>
        <LandingHero />
        <Brand />
        <LandingFeatures />
        <LandingPatenary />
      </LandingLayout>
    </section>
  );
};

export default Landing;
