const LandingHero = (): JSX.Element => {
  return (
    <section className="landing__hero px-36 mt-16">
      <div className="hero-header w-96 flex flex-col gap-3">
        <h2 className="hero-title calSans text-green02 leading-tight">
          Pour une consommation{" "}
          <span className="text-green01 calSans">responsable</span>
        </h2>
        <p className="text-gray01">
          Valorisez les produits locaux et contribuez à un mode de vie plus
          durable.
        </p>
        <button className="text-white bg-green01 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8">
          Télécharger l' app{" "}
          <img src="/icons/download-icon.svg" className=" w-5" alt="" />
        </button>
      </div>
    </section>
  );
};

export default LandingHero;
