import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from "./contexts/ProductsContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log(cart)

	const addItem = item => {
		setCart([...cart, item])
	};

	const removeItem = id => {
		const newCart = cart.filter(item => (id !== item.id))
		return setCart(newCart)

	}


	return (
		<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation/>

			{/* Routes */}
			<Route exact path="/">
				<Products/>
			</Route>

			<Route path="/cart">
				<ShoppingCart/>
			</Route>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
