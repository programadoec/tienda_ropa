import React, {useState} from 'react';
import Header from './componentes/Header';
import Ropas from './componentes/Ropas';


const App = () => {
  const [productos, setProductos] = useState([]);
	const [total, setTotal] = useState(0);
	const [contadorProductos, setContadorProductos] = useState(0);

  return (
    <>
        <Header 
          productos={productos}
          setProductos={setProductos}
          total={total}
          setTotal={setTotal}
          contadorProductos={contadorProductos}
          setContadorProductos={setContadorProductos}
        />

        <Ropas
          productos={productos}
          setProductos={setProductos}
          total={total}
          setTotal={setTotal}
          contadorProductos={contadorProductos}
          setContadorProductos={setContadorProductos}
        />
    </>
  );
}

export default App;
