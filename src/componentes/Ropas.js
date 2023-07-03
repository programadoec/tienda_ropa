import {dataRopa} from '../dataRopa'

const Ropas = ({productos,setProductos,contadorProductos,setContadorProductos,total,setTotal,}) => {
    
	const agregarProducto = product => {
		if (productos.find(item => item.id === product.id)) {
			const prod = productos.map(item =>
				item.id === product.id
					? { ...item, cantidad: item.cantidad + 1 }
					: item
			);
			setTotal(total + product.precio * product.cantidad);
			setContadorProductos(contadorProductos + product.cantidad);
			return setProductos([...prod]);
		}

		setTotal(total + product.precio * product.cantidad);
		setContadorProductos(contadorProductos + product.cantidad);
		setProductos([...productos, product]);
	};

    return (
		<div className='container-items'>
			{dataRopa.map(producto => ( 
				<div className='item' key={producto.id}>
					<figure>
						<img src={producto.img} alt={producto.nombreProducto} />
					</figure>
					<div className='info-product'>
						<h2 style={{ textTransform: 'uppercase'}}>{producto.nombreProducto}</h2>
						<p className='price'>${producto.precio}</p>
						<button onClick={() => agregarProducto(producto)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
	
}


export default Ropas;