import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log('reiniciar');
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          

          <Boton texto="-3" esBotonClick={true}
          funcionClick={clickMenos3}/>  
          <Boton texto="+3" esBotonClick={true}
          funcionClick={clickMas3}/>  
          
          <Boton texto="-1" esBotonClick={true}
          funcionClick={clickMennos1}/>  
          
          <Boton texto="+1" esBotonClick={true}
          funcionClick={clickMas1}/>  


          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;