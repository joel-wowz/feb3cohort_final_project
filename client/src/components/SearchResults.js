import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = (props) => {
  const { results } = props;
  const result = () => {
    return (
      <div>
        <SearchResult
          name={results.name}
          weight={results.weight}
          techniques={results.techniques}
          volume={results.volume}
          matches={results.matches}
        />
      </div>
    );
  };
  return result;
};

export default SearchResults;
