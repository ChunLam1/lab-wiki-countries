import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
     <div class="list-group">
      {/* <Outlet/> */}
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.alpha3Code}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              <Link to={country.alpha3Code} class="list-group-item list-group-item-action"> {country.name.common} </Link>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default CountriesList;
