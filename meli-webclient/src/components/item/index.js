import React from 'react';
import freeShippingImg from '../../assets/ic_shipping@2x.png.png';
import './item.scss';
import { navigate } from '@reach/router';

export default function Item({ item }) {
  const { title, price, picture, free_shipping, location } = item;

  const goToItem = () => {
    navigate('/sarasa');
  };

  return (
    <div className="item-grid" onClick={goToItem}>
      <img className="thumbnail" src={picture} alt={title} />
      <div>
        <p className="price">
          $ {price.amount}
          {free_shipping && (
            <img className="free-shipping" src={freeShippingImg} alt="free-shipping" />
          )}
        </p>
        <p className="title">{title}</p>
      </div>
      <div>
        <p className="location">{location.name}</p>
      </div>
    </div>
  );
}
