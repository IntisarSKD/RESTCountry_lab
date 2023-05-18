import React from 'react';

const Country = ({ country, handleVisited }) => {
  const { name, capital, languages, flags, region } = country;

  const markVisited = () => {
    handleVisited(country);
  };

  return (
    <div className="country">
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Language: {languages && languages[0]}</p>
      <p>Region: {region}</p>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <button onClick={markVisited}>Mark as Visited</button>
    </div>
  );
};

export default Country;
