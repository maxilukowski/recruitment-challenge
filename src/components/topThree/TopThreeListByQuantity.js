import React from 'react'
import data from './../../AVISIO frontend challenge orders.json'

const TopThreeListByQuantity = ({ setToggle, toggle }) => {
  const compare = (a, b) => b.quantity - a.quantity
  const sortedData = data.sort(compare)
  const topThreeEntries = sortedData.slice(0, 3)

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {topThreeEntries.map(({ quantity, price, productId, supplier }) => {
        return (
          <div
            key={(productId * quantity) / price}
          >{`${quantity} - ${supplier}`}</div>
        )
      })}
    </>
  )
}

export default TopThreeListByQuantity