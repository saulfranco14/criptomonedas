import React, {Fragment} from 'react'
import { InfoDiv , Parrafo, Precio } from '../styles/Main.styles'

const Cotizacion = ( { resultado }) => {
    if(Object.keys(resultado).length === 0 ){
        return null; 
    } 
    return (  
        <Fragment>
            <InfoDiv>
                <Precio> El precio es: <span>{ resultado.PRICE} </span> </Precio>
                <Parrafo> El precio más alto del día : <span>{ resultado.HIGHDAY}</span> </Parrafo>
                <Parrafo> El precio más bajo del día :<span> { resultado.LOWDAY}</span> </Parrafo>
                <Parrafo> Variación últimas 24 hrs:<span> { resultado.CHANGEPCT24HOUR}</span> </Parrafo>
                <Parrafo> Ultima actualización :<span> { resultado.LASTUPDATE}</span> </Parrafo>
            </InfoDiv>
        </Fragment>
    );
}
 
export default Cotizacion;