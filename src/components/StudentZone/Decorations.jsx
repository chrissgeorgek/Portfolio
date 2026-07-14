import { motion } from "framer-motion";

import bookshelf from "../../assets/illustrations/studentzone/bookshelf.svg";
import plant from "../../assets/illustrations/studentzone/plant.svg";

const Decorations = () => {
  return (
    <>
      {/* Left Plant */}
      <motion.img
        src={plant}
        alt="Plant"
        className="absolute bottom-6 left-8 w-24 md:w-32 lg:w-36 z-20 select-none"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Plant */}
      <motion.img
        src={plant}
        alt="Plant"
        className="absolute bottom-6 right-8 w-24 md:w-32 lg:w-36 z-20 select-none"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Left Decorative Bookshelf */}
      <motion.img
        src={bookshelf}
        alt="Bookshelf"
        className="absolute top-52 left-6 w-36 md:w-44 lg:w-52 opacity-90 pointer-events-none"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Decorative Bookshelf */}
      <motion.img
        src={bookshelf}
        alt="Bookshelf"
        className="absolute top-52 right-6 w-36 md:w-44 lg:w-52 opacity-90 pointer-events-none"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );
};

export default Decorations;