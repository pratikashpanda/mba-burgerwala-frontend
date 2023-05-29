import React from "react";

const OrderDetail = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"asdfg 12-32 fdg"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Pratikash"}
          </p>
          <p>
            <b>Phone</b>
            {"7064214870"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Preparing"}
          </p>
          <p>
            <b>Placed at</b>
            {"23-05-2023"}
          </p>
          <p>
            <b>Delivered at</b>
            {"25-05-2023"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"s;dfhg;lkserjglk"}
          </p>
          <p>
            <b>Paid at</b>
            {"25-05-2023"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{1321}
          </p>
          <p>
            <b>Shipping Charges</b>₹{221}
          </p>
          <p>
            <b>Tax</b>₹{132}
          </p>
          <p>
            <b>Total</b>₹{1321 + 221 + 132}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{4}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Chicken Burger</h4>
            <div>
              <span>{8}</span> x <span>{499}</span>
            </div>
          </div>
          <div>
            <h4>Double chicken burger with fries</h4>
            <div>
              <span>{2}</span> x <span>{899}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{3221}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetail;
