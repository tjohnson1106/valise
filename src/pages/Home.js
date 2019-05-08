import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="look imagine room style">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}
