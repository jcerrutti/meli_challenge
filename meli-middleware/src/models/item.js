class Item {
  constructor(itemData) {
    this.id = itemData.id;
    this.title = itemData.title;
    this.price = {
      currency: itemData.currency_id,
      amount: itemData.price,
      decimals: 2,
    };
    this.picture = itemData.thumbnail;
    this.condition = itemData.condition;
    this.free_shipping = itemData.shipping.free_shipping;
    this.location = itemData.seller_address.state;
  }
}

export default Item;
