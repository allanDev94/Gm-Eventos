import Container from "../../components/Container/Container";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactIntro from "./components/ContactIntro/ContactIntro";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contacto">
      <Container>
        <div className="contact__layout">
          <ContactIntro />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;
