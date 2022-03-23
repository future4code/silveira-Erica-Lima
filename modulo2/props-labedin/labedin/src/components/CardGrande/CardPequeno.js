import React from 'react';
import './CardGrande.css'

function CardPequeno() {
    return (
        <div className="email">
           <table>
               <tr>
                   <th>Nome</th>
                   <th>Idade</th>
                   <th>Endereço</th>
                   <th>Email</th>
               </tr>
           </table>
        </div>
    )
}

export default CardPequeno;