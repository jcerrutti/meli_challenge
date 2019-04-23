import React, { Component } from 'react';
import { getDetails } from '../../api/items';
import LandingMessage from '../landingMessage';
import './itemDetailsPage.scss';

export default class ItemDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.messages = {
      error: 'Ha ocurrido un error. Tal vez no exista este producto.',
    };
    this.state = {
      item: null,
      searching: false,
      error: false,
    };
  }

  componentWillMount() {
    const { id } = this.props;
    this.getItemDetails(id);
  }

  async getItemDetails(id) {
    this.setState({
      searching: true,
      error: false,
    });
    try {
      const { item } = await getDetails(id);
      debugger;
      this.setState({
        item,
        searching: false,
        error: false,
      });
    } catch (e) {
      this.setState({
        item: null,
        searching: false,
        error: true,
      });
    }
  }

  render() {
    const { item, error } = this.state;
    return (
      <div className="content">
        {item ? (
          <div className="item item-list">
            <div className="item-description">
              <img className="item-description-picture" src={item.big_picture} alt={item.title} />
              <p className="item-description-label">Descripción del producto</p>
              <p className="item-description-content">{item.description}</p>
            </div>
            <div className="item-main">
              <span className="item-main-sold">
                {item.condition} - {item.sold_quantity} vendidos
              </span>
              <p className="item-main-title">{item.title}</p>
              <h2 className="item-main-price">$ {item.price.amount}</h2>
              <button className="item-main-button">Comprar</button>
            </div>
          </div>
        ) : (
          <LandingMessage type="error" message={this.messages.error} />
        )}
        {error && <LandingMessage type="error" message={this.messages.error} />}
      </div>
    );
  }
}
