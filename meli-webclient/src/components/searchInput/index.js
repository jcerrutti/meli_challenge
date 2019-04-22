import React, { Component } from 'react';
import './searchInput.scss';
import glass from '../../assets/ic_Search.png';
import logoML from '../../assets/Logo_ML@2x.png';

const ENTER_KEY = 13;

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.inputValue = '';
    this.state = {
      search: '',
    };
  }

  onType = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onKeyUp = (key) => {
    if (key.keyCode === ENTER_KEY) {
      this.props.onSearch(this.state.search);
    }
  };

  render() {
    return (
      <div className="header-search-container">
        <img className="logo" src={logoML} alt="logo_meli" />
        <input onChange={this.onType} onKeyUp={this.onKeyUp} placeholder="Nunca dejes de buscar" />
        <button>
          <img src={glass} alt="search-icon" />
        </button>
      </div>
    );
  }
}
