import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";

const Orders = () => {
  const arr = [1, 2, 3, 4];
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
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#fasgjknbf</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹{532}</td>
                <td>COD</td>
                <td>Pratik</td>
                <td>
                  <Link to={`/order/${"aeffs"}`}>
                    <AiOutlineEye />
                  </Link>
                  <button>
                    <GiArmoredBoomerang/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
