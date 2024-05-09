import LandingNav from "@/components/navbar/LandingNav";
import { Ichildren } from "@/utils/interfaces";
import { Fragment } from "react";

const LandingLayout = ({ children }: Ichildren): JSX.Element => {
  return (
    <Fragment>
      <LandingNav />
      {children}
    </Fragment>
  );
};

export default LandingLayout;
