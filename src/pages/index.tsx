import Brand from "@/components/Brand";
import Loading from "@/components/Loading";
import LandingContact from "@/components/sections/landing/LandingContact";
import LandingFAQ from "@/components/sections/landing/LandingFAQ";
import LandingFeatures from "@/components/sections/landing/LandingFeatures";
import LandingFooter from "@/components/sections/landing/LandingFooter";
import LandingHero from "@/components/sections/landing/LandingHero";
import LandingPatenary from "@/components/sections/landing/LandingPatenary";
import { userServiceContext } from "@/hooks/serviceContext";
import LandingLayout from "@/layout/LandingLayout";
import Head from "next/head";

const Landing = (): JSX.Element => {
  const { loading } = userServiceContext()

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
        <LandingFooter />
      </LandingLayout>
      {loading && <Loading text="Envoi de l' email en cours" />}
    </section>
  );
};

export default Landing;
