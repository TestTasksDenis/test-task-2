// item example
// {
//   name: 'Name',
//   description: 'Description',
//   expirationDate: '01-30-1999'
// }

const filterByExpiration = (items) => {
    // change this function to return only current items
    // where expirationDate > today's date

    const date = new Date();
    let newItems;

    newItems = items.filter(item => {
        return Date.parse(new Date(item.expirationDate).toISOString()) > Date.parse(date.toISOString());
    });

    return newItems;
};