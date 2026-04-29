import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { listGenres } from "../../scripts/script";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

export function Trends() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    listGenres().then((data) => setGenres(data));
  }, []);

  const step = 150;

  const nextSlide = () => {
    if (index < genres.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="trends">
      <div
        className="trends__container"
        style={{ overflow: "hidden", width: "100%", position: "relative" }}
      >
        <motion.ul
          className="trends__types-movies"
          animate={{ x: -index * step }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            margin: 0,
            cursor: "grab",
          }}
        >
          {genres.map((type) => (
            <motion.li
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="types-movies"
              style={{
                flexShrink: 0,
                width: `${step}px`,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {type.name}
            </motion.li>
          ))}
        </motion.ul>

        <div className="trends__navegation">
          <button
            onClick={prevSlide}
            disabled={index === 0}
            style={{ opacity: index === 0 ? 0.5 : 1 }}
          >
            <FaAnglesLeft />
          </button>
          <button
            onClick={nextSlide}
            disabled={index >= genres.length - 1}
            style={{ opacity: index >= genres.length - 1 ? 0.5 : 1 }}
          >
            <FaAnglesRight />
          </button>
        </div>
      </div>
    </section>
  );
}
