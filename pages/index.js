import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@chakra-ui/react";
import About from "../components/about";
import Contact from "../components/contact";
import Habilities from "../components/habilities";
import Presentation from "../components/presentation";
import Footer from "../components/ui/footer";
import Nav from "../components/ui/nav";
import Projects from "../components/projects";
import Head from "../components/common/Head";

const Home = () => {
  return (
    <>
      <Head />
      <Nav />
      <Container maxW="container.lg" h="100%">
        <Presentation />
        <About />
        <Projects />
        <Habilities />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "presentation", "about", "habilities", "projects", "contact"])),
  },
});

export default Home;
