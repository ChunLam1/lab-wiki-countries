import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  // const location = useLocation();
  const params = useParams();

  const myCountry = props.countries.find(
    (country) => country.alpha3Code === params.alpha3Code
  );
  console.log(myCountry);

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry.alpha2Code.toLowerCase()}.png`}
        alt="country flag"
        style={{ width: '300px' }}
      />
      <h1>{myCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{myCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {myCountry.area}m<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {myCountry.borders.map((country) => {
                  return (
                    <li>
                      <Link to={`/${country}`}>{country}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
