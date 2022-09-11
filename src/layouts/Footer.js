import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-black text-center fixtext-uppercase bg-info fixed-bottom p-4"
    >
      Github app using Firebase
    </Container>
  );
};

export default Footer;
