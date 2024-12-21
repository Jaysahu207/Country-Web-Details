import React, { useState, useTransition } from "react";
import "../App.css";
import { useEffect } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);
  // console.log(search, filter);
  //here is the main logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <>
      <section className="country-section">
        <h1 className="container-title">All Countries with there Details</h1>
        {isPending ? (
          <Loader />
        ) : (
          <>
            <SearchFilter
              search={search}
              setSearch={setSearch}
              setFilter={setFilter}
              filter={filter}
              countries={countries}
              setCountries={setCountries}
            />
            <ul className="grid grid-four-cols">
              {filterCountries.map((curCountry, index) => {
                return <CountryCard country={curCountry} key={index} />;
              })}
            </ul>
          </>
        )}
      </section>
    </>
  );
};

export default Country;
