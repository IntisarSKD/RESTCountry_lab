// import React, { useEffect, useState } from 'react';
// import Country from '../components/Country';
// import VisitedCountries from '../components/VisitedCountries';

// const CountryContainer = () => {
//   const [countries, setCountries] = useState([]);
//   const [visitedCountries, setVisitedCountries] = useState([]);

//   const fetchCountry = async () => {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const jsonData = await response.json();


//     setCountries(jsonData.message);
// }

// useEffect(() => {
//     fetchCountry();
// }, [])

  // // Fetch countries from API
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((response) => response.json())
  //     .then((data) => setCountries(data));
  // }, []);

  // Function to mark a country as visited
//   const markVisited = (country) => {
//     setVisitedCountries([...visitedCountries, country]);
//   };

//   return (
//     <div className="container">
//       <div className="countries">
//         <h1>Hello countries!</h1>
//         {countries.map((country) => (
//           <Country
//             key={country.name.common}
//             country={country}
//             handleVisited={markVisited}
//           />
//         ))}
//       </div>
//       <div className="visited-countries">
//         <VisitedCountries visitedCountries={visitedCountries} />
//       </div>
//     </div>
//   );
// };

// export default CountryContainer;

import React, { useEffect, useState } from 'react';
import Country from '../components/Country';
import VisitedCountries from '../components/VisitedCountries';

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const fetchCountry = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();

    setCountries(jsonData);
  }

  useEffect(() => {
    fetchCountry();
  }, []);

  const markVisited = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <div className="container">
      <div className="countries">
        <h1>Hello countries!</h1>
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            handleVisited={markVisited}
          />
        ))}
      </div>
      <div className="visited-countries">
        <VisitedCountries visitedCountries={visitedCountries} />
      </div>
    </div>
  );
};

export default CountryContainer;
