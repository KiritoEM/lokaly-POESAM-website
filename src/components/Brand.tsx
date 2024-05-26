import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Brand = (): JSX.Element => {
  const overviewData = [3, 0, 0, 0];
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [shouldIncrement, setShouldIncrement] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && shouldIncrement) {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((prevCount, index) =>
            prevCount < overviewData[index] ? prevCount + 1 : prevCount
          )
        );
      }, 65);

      return () => clearInterval(interval);
    }
  }, [inView, shouldIncrement]);

  useEffect(() => {
    if (inView && !shouldIncrement) {
      setShouldIncrement(true);
    }
  }, [inView]);

  return (
    <section
      className="brand px-7 md:px-16 lg:px-32 py-10 bg-green02 "
      ref={ref}
    >
      <div className="container mx-auto w-full grid gap-10 grid-cols-2 md:grid-cols-4 items-center">
        <div className="partenary flex  gap-5 md:gap-4 items-center  justify-center">
          <h4 className="text-4xl lg:text-6xl text-white calSans pt-2">
            {counts[0]}
          </h4>
          <p className="text-white01 text-sm lg:text-md">
            Partenaires <br />
            locaux
          </p>
        </div>
        <div className="job flex gap-5 md:gap-4 items-center justify-center">
          <h4 className="text-4xl lg:text-6xl text-white calSans pt-2">
            {counts[1]}
          </h4>
          <p className="text-white01 text-sm lg:text-md">
            Emplois <br />
            créés
          </p>
        </div>
        <div className="food flex gap-5 md:gap-4 items-center justify-center">
          <h4 className="text-4xl lg:text-6xl text-white calSans pt-2">
            {counts[2]}
          </h4>
          <p className="text-white01 text-sm lg:text-md">
            Kilos de <br />
            nourriture sauvés
          </p>
        </div>
        <div className="selling flex gap-5 md:gap-4 items-center justify-center">
          <h4 className="text-4xl lg:text-6xl text-white calSans pt-2">
            {counts[3]} {/* Utiliser counts[3] pour les ventes */}
          </h4>
          <p className="text-white01 text-sm lg:text-md">
            ventes
            <br />
            réalisées
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brand;
