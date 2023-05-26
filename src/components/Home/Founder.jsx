import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founderr.JPG";

const Founder = () => {

    const options = {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    };
  return (
    <section className="founder">
      <motion.div {...options} >
        <img src={me} alt="founder" height={200} width={200} />

        <h3>Pratikash Panda</h3>
        <p>
          Hey Everyone, This is Pratikash Panda, the founder of MBA BurgerWala{" "}
          <br />
          Our aim is to create the most tasty burger on the planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
