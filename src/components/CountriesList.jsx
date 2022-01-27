import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div>
      {/* <Outlet/> */}
      <ul>
        {countries.map((country) => {
          return (
            <li>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              <Link to={country.alpha3Code}> {country.name.common} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
