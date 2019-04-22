import Item from './item';

class ItemList {
  constructor(data) {
    this.items = data.results.map((item) => new Item(item));
    this.categories = this.getCategoriesFromFilters(data.filters);
    this.author = {
      name: 'Juan',
      lastname: 'Cerrutti',
    };
  }

  getCategoriesFromFilters(filters) {
    const categories = filters.filter((filter) => filter.id === 'category');
    return categories[0] && categories[0].values[0].path_from_root.map((category) => category.name);
  }
}

export default ItemList;
