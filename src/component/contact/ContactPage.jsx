import { useEffect } from "react";
import ContactLanding from "./ContactLanding";
import ContactForm from "./ContactForm";

export default function Contact({ setWhite }) {
  useEffect(() => {
    setWhite(false);
  }, []);
  return (
    <>
      <ContactLanding />
      <ContactForm />
    </>
  );
}
