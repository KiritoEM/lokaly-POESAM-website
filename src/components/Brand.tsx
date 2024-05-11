const Brand = (): JSX.Element => {
  return (
    <section className="brand bg-green02 px-32 py-10 flex flex-wrap items-center justify-between">
      <div className="partenary flex gap-4 items-center">
        <h4 className="text-6xl text-white calSans pt-2">17</h4>
        <p className="text-white01">
          Partenaires <br />
          locaux
        </p>
      </div>
      <div className="job flex gap-4 items-center">
        <h4 className="text-6xl text-white calSans pt-2">+60</h4>
        <p className="text-white01">
          Emplois <br />
          crées
        </p>
      </div>
      <div className="food flex gap-4 items-center">
        <h4 className="text-6xl text-white calSans pt-2">600</h4>
        <p className="text-white01">
          Kilos de <br />
          nourriture sauvé
        </p>
      </div>
      <div className="selling flex gap-4 items-center">
        <h4 className="text-6xl text-white calSans pt-2">600</h4>
        <p className="text-white01">
          ventes<br />
          réalisés
        </p>
      </div>
    </section>
  );
};

export default Brand;
