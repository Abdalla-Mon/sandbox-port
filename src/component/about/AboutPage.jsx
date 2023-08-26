import data from "../../about.json";
import AboutLanding from "./AboutLanding";
import AboutWho from "./AboutWho";
import WorkingSteps from "./WokingSteps";
export default function AboutPage() {
  return (
    <>
      <AboutLanding />
      <AboutWho data={data.who} />
      <WorkingSteps data={data.working_steps} />
    </>
  );
}
