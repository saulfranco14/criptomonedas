import React,{Fragment, useState , useEffect }  from 'react';
import { Contenedor, Imagen, Heading }          from './styles/Main.styles';
import imagen                                   from './cryptomonedas.png';
import Formulario                               from './components/Formulario.component';
import axios                                    from 'axios';
import Cotizacion                               from './components/Cotizacion.component';
import Spinner                                  from './components/Spinner.component';

function App() {

  const [ moneda, setMoneda ]             = useState('');
  const [ criptomoneda, setCriptomoneda ] = useState('');
  const [ resultado, setResultado ]       = useState({});
  // Loading
  const[ loading, setLoading ]            = useState(false);


  useEffect(() => {
    if(moneda ===  '' ) {
      return;
    }

    const cotizarCript = async() => {
      if(moneda ===  '' ) return ;
      const url     =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const result  = await axios.get(url);
      // Loading 
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResultado(result.data.DISPLAY[criptomoneda][moneda]);
      }, 2000);
      
    }
    cotizarCript();
   
  }, [moneda, criptomoneda ]);

  const componentResult = (loading) ? <Spinner /> :  <Cotizacion resultado = { resultado }/> ;

  return (
    <Fragment>
      <Contenedor>
        <div>
          <Imagen
            src={imagen}
            alt="imagen crypto monedas"
          />
        </div>
        <div>
          <Heading>
            Cotiza Cripto Monedas al Instante
          </Heading>
          <Formulario
            setMoneda       = { setMoneda }
            setCriptomoneda = { setCriptomoneda }
          />
          {componentResult}
        </div>
      </Contenedor>
    </Fragment>
  );
}

export default App;
