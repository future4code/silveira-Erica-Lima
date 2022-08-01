import { BASE_URL } from "./baseURL";
import axios from "axios";



//a. A sintaxe.


const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
  };