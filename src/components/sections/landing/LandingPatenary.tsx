const LandingPatenary = (): JSX.Element => {
  return (
    <section className="landing__partners">
      <div className="partners-header flex flex-col items-center gap-2">
        <h4 className="text-3xl text-green01 calSans">
          Ils nous font confiance
        </h4>
        <p className="text-white01  text-center  text-lg">
          Grâce à des partenariats solides, nous sommes en mesure de vous offrir
          une sélection diversifiée de produits locaux de qualité, tout en
          soutenant les producteurs locaux et en luttant contre le gaspillage
          alimentaire
        </p>
      </div>
    </section>
  );
};

export default LandingPatenary;
