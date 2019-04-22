import React, { Component } from 'react';
import './App.scss';
import SearchInput from './components/searchInput';
import { Router } from '@reach/router';
import ListPage from './components/ListPage';
import ItemDetailsPage from './components/ItemDetailsPage/ItemDetailsPage';
import { navigate } from '@reach/router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      querySearch: '',
    };
  }

  onSearch = async (querySearch) => {
    await navigate('/');
    this.setState({
      querySearch,
    });
  };

  render() {
    const { querySearch } = this.state;
    return (
      <div className="App">
        <header>
          <SearchInput onSearch={this.onSearch} />
        </header>
        <Router className="content">
          <ListPage path="/" querySearch={querySearch} />
          <ItemDetailsPage path="/sarasa" />
        </Router>
      </div>
    );
  }
}

export default App;
