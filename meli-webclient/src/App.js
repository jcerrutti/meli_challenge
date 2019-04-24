import React, { Component } from 'react';
import './App.scss';
import SearchInput from './components/searchInput';
import LandingMessage from './components/landingMessage';
import { Router } from '@reach/router';
import ListPage from './components/ListPage';
import ItemDetailsPage from './components/ItemDetailsPage/ItemDetailsPage';
import { navigate } from '@reach/router';

class App extends Component {
  messages = {
    search: 'Encuentra aquí la oportunidad que estabas buscando.',
  }
  onSearch = (querySearch) => {
    navigate(`/items?search=${querySearch}`);
  };

  render() {
    return (
      <div className="App">
        <header>
          <SearchInput onSearch={this.onSearch} />
        </header>
        <Router className="content">
          <LandingMessage path="/" message={this.messages.search} />
          <ListPage path="/items" />
          <ItemDetailsPage path="/items/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
