import axios, { AxiosResponse } from "axios";

async function getTest(){
    const response: AxiosResponse = await axios.get(`http://localhost:8000/api/v1`)
    return response;
}

export { getTest };