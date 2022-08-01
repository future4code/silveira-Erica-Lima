import { BASE_URL } from "./baseURL";
import axios from "axios";

//a.Acho que put de adiconar novas notícias.
async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${BASE_URL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }