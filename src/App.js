import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
// import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => console.log(e));
  });

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {countries.length === 0 ? (
            <div className="loading">Loading ...</div>
          ) : (
            <>
              <CountriesList countries={countries} />
              <Routes>
                <Route
                  path=":alpha3Code"
                  element={<CountryDetails countries={countries} />}
                />
              </Routes>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
