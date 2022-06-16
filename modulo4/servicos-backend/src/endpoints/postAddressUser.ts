import axios from "axios";
import { Request, Response } from "express";
import { Address } from "../type";

export const postAddressUser = async (req: Request, res: Response) =>{
try {
    const cep = req.params.cep
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/  `)
    console.log(result);

     const body = {
        Cep: result.data.cep,
        Logradouro: result.data.logradouro,
        Número: result.data.ddd,
        Complemento: result.data.complemento,
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