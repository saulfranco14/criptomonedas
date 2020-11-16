import React,{Fragment, useEffect, useState } from 'react'
import { Button }       from '../styles/Main.styles';
import useMoneda        from '../hooks/useMoneda.component';
import useCripto        from '../hooks/useCriptomoneda.component';
import Monedas          from '../utils/Utils';
import axios            from 'axios';
import Error            from '../components/Error.component';



const Formulario = ({ setMoneda , setCriptomoneda }) => {
   
    const [ listaCripto, setlistaCripto ]       = useState([]);
    const [ error, setError ]                    = useState(false);
    const [ moneda, SelectMoneda ]    = useMoneda('Elige tu moneda', '', Monedas );
    const [ criptomoneda, SelectCripto ]        = useCripto('Elige tu Cripto-Moneda', '', listaCripto );

    // Api
    useEffect( () => {
        const resultAPI = async() =>{
            const urlApi    = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
            const Result    = await axios.get(urlApi);
            setlistaCripto(Result.data.Data);
        }
        resultAPI();
    }, [])
    
    const cotizarMoneda = (e) =>{
        e.preventDefault();
        if( moneda === '' || criptomoneda === '' ){
            setError(true);
            return;
        }
        
        setError(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);
    }

    return ( 
        <Fragment>
            <form
                onSubmit={cotizarMoneda}    
            >
                { error ? <Error mensaje="Debes de seleccionar una moneda y una cripto-moneda" /> : null }
                <SelectMoneda
                
                />
                <SelectCripto
                />
                <Button
                    type="submit"
                    value="Calcular"
                />
            </form>
        </Fragment>
     );
}
 
export default Formulario;