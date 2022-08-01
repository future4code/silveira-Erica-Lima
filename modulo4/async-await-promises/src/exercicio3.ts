import { BASE_URL } from "./baseURL";
import axios from "axios";


type User = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

  //A: não porque já fizemos a tipagem e passamos isso na promise.
  //B: acredito que seja bom, por motivos de conferir oque retorna na promise.