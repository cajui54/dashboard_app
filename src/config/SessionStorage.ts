export const getItemsStorage = (key: string) => {

    const itemsStorage = sessionStorage.getItem(key);

    const items = itemsStorage ? JSON.parse(itemsStorage) : [];

    return items;
}