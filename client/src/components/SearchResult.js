import React from 'react';

const SearchResult = (props) => {
  console.log(`im in search result ${props}`);
  const { name, weight, matches } = props;
  return (
    <div className="search-result">
      <h2>{name}</h2>
      <p>{weight}</p>
      <h3>{matches}</h3>
    </div>
  );
};
export default SearchResult;
