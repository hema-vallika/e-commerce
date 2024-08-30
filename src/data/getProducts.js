import axios from 'axios';


const getProduct = async (query) => {

    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search-v2',
        params: {
            q: query,
            language: 'en',
            page: '1',
            limit: '25',
            sort_by: 'BEST_MATCH',
            product_condition: 'ANY'
        },
        headers: {
            'x-rapidapi-key': '4512fa5352mshc54f473f8aba82bp16fd0djsn2ebebab2ae7b',
            'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.data.products);
    } catch (error) {
        console.error(error);
    }
}

export default getProduct;