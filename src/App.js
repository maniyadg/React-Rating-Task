import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Navigatbar from "./Navigatbar";
import Header from "./Header";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [products,setproduct] = useState([
    {
      id:1,
      name: "vivo S1 pro",
      price: 20000,
    },
    {
      id:2,
      name: "vivo T1",
      price: 22000,
    },
    {
      id:3,
      name: "vivo T1 pro",
      price: 24000,
    },
    {
      id:4,
      name: "vivo Y55",
      price: 18000,
    },
    {
      id:5,
      name: "vivo Y22",
      price: 14000,
    },
    {
      id:6,
      name: "vivo V22",
      price: 27000,
    },
    {
      id:7,
      name: "vivo V25",
      price: 35000,
    },
    {
      id:8,
      name: "vivo X70 pro",
      price: 44000,
    },
  ])
  const [cartitems,setcartitems] = useState([])
  let addtoCart = (product) => {
    setcartitems([...cartitems,product])
  };
  let removeFromCart = (product) =>{
   const indexValue = cartitems.findIndex(obj => obj.id === product.id)
   cartitems.splice(indexValue,1)
   setcartitems([...cartitems])
  }
  return (
    <div className="container">
      <Navigatbar cartitems={cartitems} />
      <Header />
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {products.map((product) => {
              return <Card product={product} addtoCart={addtoCart} cartitems={cartitems} />;
            })}
          </div>
        </div>
        <div className="col-lg-4 mt-2 border">
        <h3 className="bg-dark text-center text-white">Cart</h3>
          <Cart cartitems={cartitems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
