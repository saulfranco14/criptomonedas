import React, { Fragment } from 'react';
import { MensajeError }  from '../styles/Main.styles';

const Error = ( { mensaje } ) => {
    return ( 
        <Fragment>
            <MensajeError>
                {mensaje}
            </MensajeError>
        </Fragment>
     );
}
 
export default Error;