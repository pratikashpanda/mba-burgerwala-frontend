import React from 'react'
import {Link} from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className='paymentSuccess' >
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Sucessfully.  You can check the order status below</p>
            <Link to={"/myOrders"} >Check Status</Link>
        </main>

    </section>
  )
}

export default PaymentSuccess