import axios from 'axios';

async function fetchData(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    }catch(error){
        console.error('error');
        throw error;
    }
};

const a = await fetchData();
console.log(a);