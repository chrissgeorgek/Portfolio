// src/components/BookShelf.jsx

import { motion } from "framer-motion";
import BookCard from "./BookCard";

const Shelf = () => (
  <div className="relative mt-4">

    {/* Glow */}
    <div className="absolute -top-3 left-0 right-0 h-10 bg-cyan-400/10 blur-2xl" />

    {/* Shelf */}
    <div
      className="
      relative

      h-6

      rounded-lg

      bg-gradient-to-r

      from-[#2E1F17]

      via-[#6E4A2F]

      to-[#2E1F17]

      shadow-[0_20px_40px_rgba(0,0,0,.45)]
      "
    />

    {/* Bottom */}
    <div
      className="
      h-2

      rounded-b-lg

      bg-[#241710]
      "
    />

  </div>
);

const BookShelf = ({ projects, onProjectClick }) => {
  return (
    <div className="space-y-24">

      {/* Shelf 1 */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .7,
        }}
      >

        <div
          className="
          grid

          grid-cols-2

          gap-8

          md:grid-cols-3

          lg:grid-cols-5
          "
        >
          {projects.slice(0, 5).map((project) => (
            <BookCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>

        <Shelf />

      </motion.div>

      {/* Shelf 2 */}

      {projects.length > 5 && (

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
            delay: .15,
          }}
        >

          <div
            className="
            grid

            grid-cols-1

            sm:grid-cols-2

            md:grid-cols-3

            lg:grid-cols-5

            gap-8
            "
          >
            {projects.slice(5).map((project) => (
              <BookCard
                key={project.id}
                project={project}
                onClick={onProjectClick}
              />
            ))}
          </div>

          <Shelf />

        </motion.div>

      )}

    </div>
  );
};

export default BookShelf;