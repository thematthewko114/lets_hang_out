import { AxiosResponse } from "axios";
import { getTest } from ".";

async function GetTest(){
    const response: AxiosResponse = await getTest();
    return response.data;
}

export {GetTest}