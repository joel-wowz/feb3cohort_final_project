import React from 'react';

const SearchResult = (props) => {
  const { name, techniques, weight, volume, matches } = props;
  return (
    <div className="search-result">
      <h2>{name}</h2>
      <p>{weight}</p>
      <p>{techniques}</p>
      <p>{volume}</p>
      <h3>{matches}</h3>
    </div>
  );
};
export default SearchResult;
