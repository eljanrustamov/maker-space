import React from "react";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/hero.component";

function Home({ content }) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Hero/>
      <Gallery content={content} />
    </>
  );
}

export default Home;
