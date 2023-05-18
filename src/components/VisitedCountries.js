import React from 'react';

const VisitedCountries = ({ visitedCountries }) => {
  return (
    <div className="visited-countries">
      <h2>Visited Countries</h2>
      {visitedCountries.length > 0 ? (
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      ) : (
        <p>No countries visited yet.</p>
      )}
    </div>
  );
};

export default VisitedCountries;
