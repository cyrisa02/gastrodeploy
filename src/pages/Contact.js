import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue du Code</p>
              <p> 33 000 Bordeaux</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0642156033" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  0642156033
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="gastronome@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié!");
                  }}
                >
                  gastronome@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="credits">
            <p>fromCyrisa02 - 2021</p>
          </div>
          <input
            className="button"
            type="button"
            value="Envoyer"
            // onClick={handleSubmit}
          />
        </div>
        <ButtonsBottom left={"/pricingtable"} />
      </div>
    </main>
  );
};

export default Contact;
