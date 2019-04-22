import axios from 'axios';
import querystring from 'querystring';
import ItemList from '../models/itemList';
import ItemDetails from '../models/itemDetails';

const listUri = 'https://api.mercadolibre.com/sites/MLA/search';
const itemUri = 'https://api.mercadolibre.com/items/';

class ItemController {
  async getListOfItems(req, res) {
    const query = querystring.stringify({
      ...req.query,
    });

    const requestUri = `${listUri}?${query}`;

    try {
      const { data } = await axios.get(requestUri);
      const parsedResponse = new ItemList(data);
      res.json(parsedResponse);
    } catch (e) {
      res.status(400).json('Bad Request');
    }
  }

  async getItemDetail(req, res) {
    const { id } = req.params;

    const item = `${itemUri}${id}`;
    const detail = `${itemUri}${id}/description`;

    try {
      const itemRequest = axios.get(item);
      const detailRequest = axios.get(detail);
      const [itemResponse, detailResponse] = await Promise.all([itemRequest, detailRequest]);
      const parsedResponse = new ItemDetails(itemResponse, detailResponse).getParsedItem();
      res.json(parsedResponse);
    } catch (e) {
      res.status(400).json('Bad Request');
    }
  }
}

export default new ItemController();
