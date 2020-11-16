import React, { Fragment, useState } from 'react';
import { Label, Select} from '../styles/Main.styles';

const useCriptomoneda = ( label, stateInicial, criptomonedas) => {

   const [state, setState] = useState(stateInicial);
   const SelectCripto = () => (
       <Fragment>
           <Label>{label}</Label>
           <Select
            onChange={ e => setState(e.target.value) }
            value={ state }
           >
               <option value=""> -- Seleccione -- </option>
               {
                   criptomonedas.map( cripto =>(
                    <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>
                   ))
               }
           </Select>
       </Fragment>
   );

    return [ state, SelectCripto ];
}
 
export default useCriptomoneda;
