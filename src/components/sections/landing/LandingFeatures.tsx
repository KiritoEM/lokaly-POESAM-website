const LandingFeatures = (): JSX.Element => {
  return (
    <section className="leanding__features py-24 px-32">
      <div className="features-header flex flex-col items-center gap-3">
        <h4 className="text-5xl text-green01 calSans">
          Connecter, Promouvoir, Agir
        </h4>
        <p className="text-white01 w-72 text-center  text-lg">
          pour une Alimentation Locale et Durable à Madagascar
        </p>
      </div>
      <div className="features-content flex mt-12">
        <div className="w-2/5 flex flex-col gap-4">
          <h3 className="text-3xl calSans text-gray02">
            Moins de gaspillage, Plus de soutien aux producteurs, <br /> Une
            différence délicieuse
          </h3>
          <p className="text-gray01">
            Soyez notifiés de nos superbes offres et ne ratez rien{" "}
          </p>
        </div>
        <div className="w-2/5"></div>
      </div>
    </section>
  );
};

export default LandingFeatures;
