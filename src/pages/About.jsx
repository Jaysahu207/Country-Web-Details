import React from "react";
import "../App.css";

import countryFacts from "../api/countryData.json";
const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting Facts
        <br />
        we,re proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const {
            id,
            name,
            capital,
            population,
            interestingFact,
            president,
            primeMinister,
            flag,
            wikiLink,
          } = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <div className="flag-container">
                  <p className="card-title">
                    <a href={wikiLink}>{name}</a>
                  </p>
                  <img src={flag} alt="" className="flag-image" />
                </div>
                <p>
                  <span className="card-description">Capital :</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">President :</span>
                  {president}
                </p>
                <p>
                  <span className="card-description">Prime Minister :</span>
                  {primeMinister}
                </p>
                <p>
                  <span className="card-description">Population :</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact :</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
