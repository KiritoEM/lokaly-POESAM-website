import Brand from "@/components/Brand";
import LandingFeatures from "@/components/sections/landing/LandingFeatures";
import LandingHero from "@/components/sections/landing/LandingHero";
import LandingLayout from "@/layout/LandingLayout";

const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <LandingHero />
        <Brand />
        <LandingFeatures />
      </LandingLayout>
    </section>
  );
};

export default Landing;
