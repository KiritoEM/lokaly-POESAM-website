import Brand from "@/components/Brand";
import LandingHero from "@/components/sections/landing/LandingHero";
import LandingLayout from "@/layout/LandingLayout";

const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <LandingHero />
        <Brand />
      </LandingLayout>
    </section>
  );
};

export default Landing;
