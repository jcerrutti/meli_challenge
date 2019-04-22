const itemsUri = 'http://localhost:4000/api/items';
export function getItems(query) {
  return fetch(`${itemsUri}?q=${query}&limit=4`).then((res) => res.json());
}
