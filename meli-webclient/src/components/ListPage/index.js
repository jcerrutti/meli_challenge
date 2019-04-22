import React, { Component } from 'react';
import { getItems } from '../../api/items';
import ItemList from '../itemList';
import LandingMessage from '../landingMessage';
import "./listPage.scss";

export default class ListPage extends Component {
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
      querySearch: '',
    };
  }

  componentWillReceiveProps = (props) => {
    if (this.state.querySearch !== props.querySearch && props.querySearch !== '') {
      this.onSearch(props.querySearch);
    }
  };

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

  async onSearch(querySearch) {
    this.isSearching(querySearch);
    try {
      const results = await getItems(querySearch);
      this.searchSuccess(results);
    } catch (e) {
      this.searchFailed();
    }
  }
  render() {
    const { results, error, didSearch, searching } = this.state;
    return (
      <React.Fragment>
        {!error ? (
          <div className="content">
            {!searching ? (
              <React.Fragment>
                {results.length > 0 && <ItemList path="/" items={results} />}
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
      </React.Fragment>
    );
  }
}
