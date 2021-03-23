export const getAll = (category) => {
    let url = 'http://localhost:5001/pets';
    let queryString = (category && (category !== 'All')) ? `?category=${category}` : '';
    url += queryString;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err))
}
