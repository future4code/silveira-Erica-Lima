import { BASE_URL } from "./baseURL";
import axios from "axios";

//a. Endpoint GET.
//b.Promiesses indicando que é uma any [].

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
  };
