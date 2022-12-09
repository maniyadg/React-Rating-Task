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
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtSnWJUkMXOCobJTXNmq3CzKkSvlc0whiIQ&usqp=CAU`
    },
    {
      id:2,
      name: "vivo T1",
      price: 22000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-w76TeW57xrUglUYEp0OwkkZGsx5oBy73KA&usqp=CAU`
    },
    {
      id:3,
      name: "vivo T1 pro",
      price: 24000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxID90w-CiQZqiKUG3EZodNIlqJOrRZCf2g&usqp=CAU`
    },
    {
      id:4,
      name: "vivo Y55",
      price: 18000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiPO85-d2iK8z1ItyRt5_SsGpCF-PnDYdSA&usqp=CAU`
    },
    {
      id:5,
      name: "vivo Y22",
      price: 14000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFAJY5UehePfBndR9vcrBxl5Dzx1_vzHSLw&usqp=CAU`
    },
    {
      id:6,
      name: "vivo V22",
      price: 27000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Z25fIq2sfV928hUE0sIrFFSHjQX_ag6FKA&usqp=CAU`
    },
    {
      id:7,
      name: "vivo V25",
      price: 35000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDia61kx_j5mMrAq-6mC1OHErKIBNEVHgtYA&usqp=CAU`
    },
    {
      id:8,
      name: "vivo X70 pro",
      price: 44000,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhM2j6ca-4h5QNC36AiT7ri0EGjqBSJ15BsQ&usqp=CAU`
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
