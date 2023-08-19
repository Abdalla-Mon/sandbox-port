import SCom from "./SCom";
import SDo from "./SDo";
import ServicesLanding from "./SLanding";
import Pricing from "./SPricing";
import SProc from "./SProc";
import Solution from "./SSolution";

export default function Services() {
  return (
    <>
      <ServicesLanding />
      <SDo />
      <SProc />
      <Solution />
      <Pricing />
      <SCom />
    </>
  );
}
