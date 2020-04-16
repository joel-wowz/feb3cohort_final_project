import React from 'react';

const SearchResult = (props) => {
  const { result } = props;
  return (
    <div className="search-result">
      <h2>{result.name}</h2>
      <p>{result.volume}</p>
      <h3>{result.matches.join(', ')}</h3>
    </div>
  );
};
export default SearchResult;
