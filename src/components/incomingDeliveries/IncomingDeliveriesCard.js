import React from 'react'
import styled from 'styled-components'
import DeliveryDates from './DeliveryDates'

const IncomingDeliveriesCard = ({ data }) => {
  const convertedDates = data.map((entry) => {
    const deliveryDate = new Date(entry.deliveryDate)

    return { ...entry, deliveryDate }
  })

  const sortedData = convertedDates.sort(
    (a, b) => a.deliveryDate - b.deliveryDate
  )

  let deliveriesByDayBySupplier = {}
  sortedData.forEach(({ deliveryDate, supplier, productName, quantity }) => {
    if (!deliveriesByDayBySupplier.hasOwnProperty(deliveryDate)) {
      deliveriesByDayBySupplier[deliveryDate] = {}
    }
    if (!deliveriesByDayBySupplier[deliveryDate].hasOwnProperty(supplier)) {
      deliveriesByDayBySupplier[deliveryDate][supplier] = []
    }
    deliveriesByDayBySupplier[deliveryDate][supplier].push({
      productName,
      quantity,
    })
  })

  return (
    <>
      <Wrapper>
        <DeliveryDates deliveriesByDayBySupplier={deliveriesByDayBySupplier} />
      </Wrapper>
    </>
  )
}

export default IncomingDeliveriesCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
