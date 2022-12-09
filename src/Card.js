import React from "react";

function Card({ product, addtoCart, cartitems }) {
  return (
    <div className="col-lg-4 border p-3 mt-2">
      <div className="row">
        <div className="col-lg-12 ">
          <img
            class="card-img-top"
            src={product.img}
            alt="..."
          />
        </div>
        <div className="col-lg-12">
          <div class="text-center">
            <h5 class="fw-bolder">{product.name}</h5>
            <h5>Price :Rs.{product.price}</h5>
            <button
              disabled={cartitems.some((obj) => obj.id === product.id)}
              onClick={() => {
                addtoCart(product);
              }}
              className="btn btn-primary btn-sm"
            >{
              cartitems.some((obj) => obj.id === product.id) ? 'Added to Cart' : 'Add to Cart'
            }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
