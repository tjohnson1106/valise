import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "And I know you're saying, Oh Bob, you've done it this time."
      },
      {
        icon: <FaHiking />,
        title: "Endless Folly",
        info: "And I know you're saying, Oh Bob, you've done it this time."
      },
      {
        icon: <FaShuttleVan />,
        title: "No Thought",
        info: "And I know you're saying, Oh Bob, you've done it this time."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "And I know you're saying, Oh Bob, you've done it this time."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
