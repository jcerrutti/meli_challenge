import React, { Component } from 'react';
import queryString from 'query-string';
import './searchInput.scss';
import glass from '../../assets/ic_Search.png';
import logoML from '../../assets/Logo_ML@2x.png';
import { navigate } from '@reach/router';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.inputValue = '';
    this.state = {
      search: '',
    };
  }

  componentWillMount = () => {
    const search = Object.values(queryString.parse(window.location.href))[0]; 
    this.setState({
      search: search ? search : '',
    });
  };

  onType = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.search);
  };

  navigateRoot = () => {
    this.setState({
      search: '',
    });
    navigate('/');
  };

  render() {
    const { search } = this.state;
    return (
      <div className="header-search-container">
        <img onClick={this.navigateRoot} className="logo" src={logoML} alt="logo_meli" />
        <form onSubmit={this.onSearch}>
          <input
            required
            value={search}
            onChange={this.onType}
            placeholder="Nunca dejes de buscar"
          />
          <button type="submit">
            <img src={glass} alt="search-icon" />
          </button>
        </form>
      </div>
    );
  }
}
