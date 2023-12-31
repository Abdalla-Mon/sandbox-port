import { motion } from "framer-motion";
import { useState } from "react";
import BlueBtn from "../fixedComponent/BlueBtn";
export default function ContactForm() {
  const [focus, setFocus] = useState(false);
  const [zoom, setZoom] = useState(false);

  return (
    <section className="contact-form">
      <div className="container mx-auto">
        <h1>Drop Us a Line</h1>
        <p>
          Reach out to us from our contact form and we will get back to you
          shortly.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="lap:flex gap-8 ">
            <Inputs e={"First Name"} type={"text"} id="first-name" />
            <Inputs e={"Last Name"} type={"text"} id="last-name" />
          </div>
          <div className="lap:flex gap-8 ">
            <Inputs e={"Email"} type={"email"} id="email" />
            <Inputs e={"Problem"} type={"text"} id="problem" />
          </div>
          <div>
            <motion.label
              className="message-label"
              htmlFor="cmessage"
              onBlur={() => {
                setFocus(false);
                document.querySelector("#cmessage").value === ""
                  ? setZoom(false)
                  : null;
              }}
              initial={{ border: "1px solid transparent" }}
              animate={
                focus
                  ? { borderColor: "#3f78e096" }
                  : { borderColor: "transparent" }
              }
            >
              <motion.h5
                initial={{ top: 12, fontSize: "18px" }}
                animate={
                  zoom
                    ? { top: 0, fontSize: "14px" }
                    : { top: 12, fontSize: "18px" }
                }
                transition={{ duration: 0.1 }}
              >
                Message
              </motion.h5>
              <motion.textarea
                id="cmessage"
                onFocus={() => {
                  setFocus(true);
                  setZoom(true);
                }}
              />
            </motion.label>
          </div>
          <BlueBtn text="Send Text" />
        </form>
      </div>
    </section>
  );
}
function Inputs({ e, type, id }) {
  const [focus, setFocus] = useState(false);
  const [zoom, setZoom] = useState(false);
  let x = document.querySelector("#" + id);
  return (
    <motion.label
      className="fixed-label"
      htmlFor={id}
      onBlur={() => {
        setFocus(false);
        x.value === "" ? setZoom(false) : null;
      }}
      initial={{ border: "1px solid rgb(236 242 252)" }}
      animate={
        focus
          ? { borderColor: " #3f78e096" }
          : { borderColor: "rgb(236 242 252)" }
      }
    >
      <motion.h5
        initial={{ top: 12, fontSize: "18px" }}
        animate={
          zoom ? { top: 0, fontSize: "14px" } : { top: 12, fontSize: "18px" }
        }
        transition={{ type: "just", duration: 0 }}
      >
        {e}
      </motion.h5>
      <motion.input
        id={id}
        type={type}
        onFocus={() => {
          setFocus(true);
          setZoom(true);
        }}
      />
    </motion.label>
  );
}
