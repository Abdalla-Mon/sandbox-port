import About from "./About";
import Case from "./Case";
import ChooseUs from "./ChooseUs";
import Landing from "./Landing";
import MoreAbout from "./MoreAbout";
import Services from "./Services";
import Video from "./Video";
import OuTeam from "./OurTeam";
import { motion } from "framer-motion";
export default function Home() {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      // transition={{ duration: 0.3 }}
    >
      <Landing />
      <Video />
      <About />
      <Services />
      <MoreAbout />
      <Case />
      <ChooseUs />
      <OuTeam />
    </motion.div>
  );
}
