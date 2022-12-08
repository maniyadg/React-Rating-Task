import React from "react";

function Cart({ cartitems, removeFromCart }) {
  return (
    <>
      {cartitems.length == 0 ? (
        <h5>No Items in Cart</h5>
      ) : (
        <>
          <ol class="list-group list-group-numbered">
            {cartitems.map((items) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{items.name}</div>
                    Rs.{items.price}
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(items);
                    }}
                    class="badge bg-danger mt-3 rounded-pill btn"
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
          <h3>
            Total : Rs.
            {cartitems.reduce((prev, curr) => {
              return (prev = prev + curr.price);
            }, 0)}
          </h3>
        </>
      )}
    </>
  );
}

export default Cart;
