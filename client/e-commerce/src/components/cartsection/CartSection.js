import React from 'react'
import "./CartSection.css"

const CartSection = () => {
  return (
    <>
       <div className="c-products-main">
       <div className="c-products">
        <p>PRODUCTS</p>
          <p>DESCRIPTION</p>
          <p>PRICE</p>
          <p>DELETE</p>
        </div>
       </div>
       <div className="c-items-main">
        <div className="c-items">
          <img src="https://wholesale.alegre.net.au/assets/full/S-IPHX-ALL-NIB.jpg?20201026105128" alt="" />
          <p>IPHONE X</p>
          <p>$2300.00</p>
          <button>DELETE</button>
        </div>
       </div>
    </>
  )
}

export default CartSection
