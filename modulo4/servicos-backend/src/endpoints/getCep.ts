import axios from "axios";
import { Request, Response } from "express";

export const getCep = async (req: Request, res: Response)=>{
try {
    const cep = req.params.cep
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/  `)
    console.log(result);

     const body = {
        Logradouro: result.data.logradouro,
        Bairro: result.data.bairro,
        Cidade: result.data.localidade,
        Estado : result.data.uf,
        
     }

     res.status(200).send(body)
    
} catch (error:any) {
    console.log(error)
     res.send(error.message || error.sqlMessage)
    
}
}