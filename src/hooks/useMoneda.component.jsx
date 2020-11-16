import React, { Fragment, useState} from 'react';
import { Label, Select} from '../styles/Main.styles';

const useMoneda = ( label, stateInicial, monedas) => {

   const [state, setState] = useState(stateInicial);

   const Seleccionar = () => (
       <Fragment>
           <Label>{label}</Label>
           <Select
            onChange={ e => setState(e.target.value) }
            value={ state }
           >
               <option value=""> -- Seleccione -- </option>
               {
                   monedas.map( opcion =>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                   ))
               }
           </Select>
       </Fragment>
   );

    return [ state, Seleccionar, setState ];
}
 
export default useMoneda;
