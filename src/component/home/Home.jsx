import About from "./About";
import Case from "./Case";
import ChooseUs from "./ChooseUs";
import Landing from "./Landing";
import MoreAbout from "./MoreAbout";
import Services from "./Services";
import Video from "./Video";

export default function Home() {
  return (
    <>
      <Landing />
      <Video />
      <About />
      <Services />
      <MoreAbout />
      <Case />
      <ChooseUs />
    </>
  );
}
