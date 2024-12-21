import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import Loader from "../UI/Loader";
import { getCountryIndData } from "../../api/postApi";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(); // Changed from [] to null since it's a single object.

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);
        if (res.status === 200) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, [params.id]); // Added dependency to avoid warnings.

  if (isPending) return <Loader />;

  if (!country) {
    return <div>Country data not available. Please try again later.</div>;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          {country.flags && (
            <img
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name?.common}`}
              className="flag"
            />
          )}
          <div className="country-content">
            <p className="card-title">{country.name?.official || "N/A"}</p>

            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names:</span>{" "}
                {country.name?.nativeName
                  ? Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key]?.common)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Population:</span>{" "}
                {country.population
                  ? country.population.toLocaleString()
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Region:</span>{" "}
                {country.region || "N/A"}
              </p>
              <p>
                <span className="card-description">Sub Region:</span>{" "}
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="card-description">Capital:</span>{" "}
                {country.capital ? country.capital.join(", ") : "N/A"}
              </p>
              <p>
                <span className="card-description">Top Level Domain:</span>{" "}
                {country.tld ? country.tld[0] : "N/A"}
              </p>
              <p>
                <span className="card-description">Currencies:</span>{" "}
                {country.currencies
                  ? Object.keys(country.currencies)
                      .map((key) => country.currencies[key]?.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Languages:</span>{" "}
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
