import data from "../../about.json";
import AboutCall from "./AboutCall";
import AboutLanding from "./AboutLanding";
import AboutSave from "./AboutSave";
import AboutSlider from "./AboutSlider";
import AboutWho from "./AboutWho";
import WorkingSteps from "./WokingSteps";
export default function AboutPage() {
  return (
    <>
      <AboutLanding />
      <AboutWho data={data.who} />
      <WorkingSteps data={data.working_steps} />
      <AboutSlider data={data.about_slider_1} />
      <AboutSave data={data.about_slider_2} />
      <AboutCall />
    </>
  );
}
