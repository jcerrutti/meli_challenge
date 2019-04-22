import React, { Component } from 'react';
import './App.scss';
import SearchInput from './components/searchInput';
import ItemList from './components/itemList';
import LandingMessage from './components/landingMessage';
import { Router } from '@reach/router';
import { getItems } from './api/items';

class App extends Component {
  constructor(props) {
    super(props);

    this.messages = {
      search: 'Encuentra aquí la oportunidad que estabas buscando.',
      emptyResults: 'No hay publicaciones que coincidan con tu búsqueda.',
      error: 'Oops! Ha ocurrido un error. Prueba buscando nuevamente.',
    };

    this.state = {
      results: [],
      searching: false,
      didSearch: false,
      error: false,
    };
  }

  isSearching = (querySearch) => {
    this.setState({
      querySearch,
      didSearch: true,
      searching: true,
      error: false,
    });
  };

  searchSuccess = (results) => {
    this.setState({
      results: results.items,
      searching: false,
      error: false,
    });
  };

  searchFailed = () => {
    this.setState({
      results: [],
      searching: false,
      error: true,
    });
  };

  async onSearch(inputQuery) {
    this.isSearching(inputQuery);
    try {
      const results = await getItems(inputQuery);
      this.searchSuccess(results);
    } catch (e) {
      this.searchFailed();
    }
  }

  render() {
    const { results, error, didSearch, searching } = this.state;
    return (
      <div className="App">
        <header>
          <SearchInput onSearch={this.onSearch.bind(this)} />
        </header>
        {!error ? (
          <div className="content">
            {!searching ? (
              <React.Fragment>
                <Router>{results.length > 0 && <ItemList path="/" items={results} />}</Router>
                {results.length === 0 && !didSearch && (
                  <LandingMessage type="regular" message={this.messages.search} />
                )}
                {results.length === 0 && didSearch && (
                  <LandingMessage type="regular" message={this.messages.emptyResults} />
                )}
              </React.Fragment>
            ) : (
              <React.Fragment />
            )}
          </div>
        ) : (
          <div className="content content__error">
            <LandingMessage type="regular" message={this.messages.error} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
