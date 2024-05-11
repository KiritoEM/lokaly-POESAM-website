import { partnerList } from "@/helpers/constants";

const LandingPatenary = (): JSX.Element => {
  return (
    <section className="landing__partners pt-36 px-40 bg-white">
      <div className="partners-header flex flex-col items-center gap-2">
        <h4 className="text-4xl text-green01 calSans">
          Ils nous font confiance
        </h4>
        <p className="text-white01  text-center  text-lg">
          Grâce à des partenariats solides, nous sommes en mesure de vous offrir
          une sélection diversifiée de produits locaux de qualité, tout en
          soutenant les producteurs locaux et en luttant contre le gaspillage
          alimentaire
        </p>
      </div>
      <div className="partners-content grid grid-cols-4 gap-20 mt-16">
        {partnerList.map((item, index) => (
          <div className="container w-full">
            <img key={index} src={`/icons/${item}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingPatenary;
