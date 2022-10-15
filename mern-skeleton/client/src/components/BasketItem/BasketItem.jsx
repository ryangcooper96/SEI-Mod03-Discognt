import React from 'react'

function BasketItem(props) {
  return (
    <div>{props.listing}, £{props.price}, {props.quantity}</div>
  )
}

export default BasketItem