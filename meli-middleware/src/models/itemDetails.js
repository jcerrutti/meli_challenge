import Item from './item';

class ItemDetails extends Item {
  constructor(item, details) {
    const { data } = item;
    super(data);
    this.sold_quantity = data.sold_quantity;
    this.big_picture = data.pictures[0].url;
    this.description = details.data.plain_text;
  }

  getParsedItem() {
    return {
      item: this,
      author: {
        name: 'Juan',
        lastname: 'Cerrutti',
      },
    };
  }
}

export default ItemDetails;
