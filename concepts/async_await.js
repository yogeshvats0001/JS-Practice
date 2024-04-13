/// ASYNC AWAIT
import axios from 'axios';
async function getData(){
    const data = await axios.get('https://dummyjson.com/products');
    console.log(data)
    const response = data.data.products[0];
    console.log(response);
}

getData();