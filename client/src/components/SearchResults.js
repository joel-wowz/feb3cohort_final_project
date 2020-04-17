import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = (props) => {
  const { results, ...rest } = props;
  console.log(`hello im in search results ${props.results}`);
  return results.map((result) => <SearchResult key={result.id} {...rest} />);
};

export default SearchResults;
