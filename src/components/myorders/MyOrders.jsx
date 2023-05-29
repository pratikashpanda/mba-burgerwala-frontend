import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai'

const MyOrders = () => {
  const arr = [1,2,3,4]
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Status</th>
              <th>Item Quantity</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i} >
                <td>#fasgjknbf</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹{532}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${"aeffs"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
