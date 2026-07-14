import { motion } from "framer-motion";

const prices = [
  {
    title: "Mini Project",
    price: "₹3,000",
  },
  {
    title: "Main Project",
    price: "₹7,000",
  },
  {
    title: "IEEE Project",
    price: "Custom",
  },
];

const PriceBoard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      {/* Wooden Frame */}
      <div className="rounded-3xl bg-[#8B5A2B] p-4 shadow-2xl">

        {/* Blackboard */}
        <div
          className="
            relative
            w-80
            rounded-2xl
            border-[6px]
            border-[#3f2b16]
            bg-[#214B38]
            p-8
            shadow-inner
          "
        >
          {/* Chalk Dust */}
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,.05),transparent_45%)]" />

          {/* Heading */}
          <motion.h2
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
              overflow-hidden
              whitespace-nowrap
              border-b
              border-dashed
              border-white/30
              pb-3
              text-center
              font-fredoka
              text-3xl
              font-bold
              text-white
            "
          >
            Price List
          </motion.h2>

          {/* Price List */}
          <div className="mt-8 space-y-5 font-fredoka text-lg text-white">

            {prices.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
                className="flex justify-between"
              >
                <span>{item.title}</span>
                <span>{item.price}</span>
              </motion.div>
            ))}

          </div>

          {/* Divider */}
          <div className="my-6 border-t border-dashed border-white/30" />

          {/* Features */}
          <div className="space-y-3 font-fredoka text-white">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .3 }}
            >
              ✓ Documentation Included
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .5 }}
            >
              ✓ Source Code Included
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .7 }}
            >
              ✓ One Revision Free
            </motion.p>

          </div>

          {/* Chalk Tray */}
          <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-full bg-[#5B3A1F] shadow-lg" />

          {/* Chalk */}
          <div className="absolute -bottom-3 left-[38%] h-2 w-10 rounded-full bg-white" />

          {/* Duster */}
          <div className="absolute -bottom-3 right-[30%] h-4 w-12 rounded bg-yellow-200 shadow" />

        </div>
      </div>
    </motion.div>
  );
};

export default PriceBoard;