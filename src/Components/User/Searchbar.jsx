import PropTypes from 'prop-types';

const SearchBar = ({ index, bar, onInputChange, onSuggestionSelect }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Type a word..."
      value={bar.word}
      onChange={e => onInputChange(index, e)}
    />
    {bar.suggestions.length > 0 && !bar.suggestionSelected && (
      <div className="suggested-words">
        <ul>
          {bar.suggestions.map((suggestion, idx) => (
            <li key={idx} onClick={() => onSuggestionSelect(index, suggestion)}>{suggestion}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

SearchBar.propTypes = {
  index: PropTypes.number.isRequired,
  bar: PropTypes.shape({
    word: PropTypes.string.isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
    suggestionSelected: PropTypes.bool.isRequired
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSuggestionSelect: PropTypes.func.isRequired
};

export default SearchBar;
