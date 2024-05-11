const LandingFeatures = (): JSX.Element => {
  return (
    <section className="landing__features py-24 px-32 bg-white">
      <div className="features-header flex flex-col items-center gap-3">
        <h4 className="text-5xl text-green01 calSans">
          Connecter, Promouvoir, Agir
        </h4>
        <p className="text-white01 w-72 text-center  text-lg">
          pour une Alimentation Locale et Durable à Madagascar
        </p>
      </div>
      <div className="features-content flex gap-16 mt-16">
        <div className="header w-1/3 flex flex-col gap-11">
          <div className="text-container flex flex-col gap-5">
            <h3 className="text-3xl calSans text-gray02">
              Moins de gaspillage, Plus de soutien aux producteurs, <br /> Une
              différence délicieuse
            </h3>
            <p className="text-gray01">
              Soyez notifiés de nos superbes offres et ne ratez rien{" "}
            </p>
          </div>
          <div
            className="relative mb-4 flex items-stretch bg-white02 rounded-3xl py-2 pr-2 pl-7"
            data-twe-input-wrapper-init
            data-twe-input-group-ref
          >
            <span
              className="flex items-center whitespace-nowrap"
              id="basic-addon1"
              data-twe-input-group-text-ref
            >
              <img src="/icons/email-icon.svg" className="w-9" />
            </span>
            <input
              type="text"
              className="min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-gray03 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray03 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-gray03 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-1 text-gray03"
              id="exampleFormControlInput"
              placeholder="votre adresse email"
            />
            <span
              className="flex items-center whitespace-nowrap"
              id="basic-addon1"
              data-twe-input-group-text-ref
            >
              <img src="/icons/send-icon.png" className="w-20" />
            </span>
          </div>
        </div>
        <div className="features flex gap-5 w-2/3 overflow-hidden">
          <div className="w-2/4 h-96 bg-green03 rounded-lg  flex flex-col items-center p-9">
            <h3 className="calSans text-gray02 text-3xl">Facile à installer</h3>
            <p className="text-gray02 text-center">
              Téléchargez, installez l’application et ....c’est prêt
            </p>
            <img src="/home-img.png" alt="" />
          </div>
          <div className="w-2/4 h-96 bg-green03 rounded-lg  flex flex-col items-center p-9">
            <h3 className="calSans text-gray02 text-3xl">Acces direct</h3>
            <p className="text-gray02 text-center">
              Accédez et Explorez nos superbes offres avec ou sans compte
            </p>
            <img src="/home-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
