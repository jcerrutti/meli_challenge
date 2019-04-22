import React, { Component } from 'react';
import Item from '../item';
import './itemList.scss';

export default class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
