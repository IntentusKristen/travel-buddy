import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
    this.handleChange(address);
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}

        // Bias towards Ontario suggestions (for testing purposes)
        searchOptions={{
          bounds: new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(41.7, -95.2), 
            new window.google.maps.LatLng(56.7, -74.0)  
          ),
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* Searchbox */}
            <input
              {...getInputProps({
                placeholder: 'Search TravelBuddy! 🔎',
                className: 'location-search-input',
                style: {
                  padding: '0.4rem 1.3rem',
                  width: '22vw',
                  borderRadius: '1rem',
                  fontSize: '1rem',
                  color: '#000000',
                }
              })}
            />
            {/* Suggestion dropdown */}
            <div 
              className="autocomplete-dropdown-container"
              style={{
                paddingLeft: 30,
                width: '25vw',
              }}
              >
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                
                  const style = {
                    backgroundColor: suggestion.active ? '#d1ebd1' : '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '1rem',
                    color: '#000000',
                    padding: '0.5rem 1rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default SearchBar;