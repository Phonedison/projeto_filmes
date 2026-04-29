import { IoStar } from "react-icons/io5";
import { motion } from "motion/react";

const movieList = [
  { img: "/img/thor.jpg", titulo: "Thor 2", ano: 2000, nota: 7.5 },
  { img: "/img/thor.jpg", titulo: "Thor 2", ano: 2010, nota: 7 },
  { img: "/img/thor.jpg", titulo: "Thor 2", ano: 2020, nota: 8 },
  { img: "/img/thor.jpg", titulo: "Thor 2", ano: 2030, nota: 9 },
  { img: "/img/thor.jpg", titulo: "Thor 2", ano: 2040, nota: 9.5 },
];
export function ListMovies() {
  return (
    <>
      <section className="list-movies">
        <div className="list-movies__container">
          <ul className="list-movies__itens">
            {movieList.map((movie, index) => (
              <motion.li
                key={index}
                id={`${index}-${movie.titulo.trim()}`}
                className="list-movies__item"
                initial={{ filter: "grayscale(0.65)" }}
                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0.01)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="movie">
                  <div className="movie__img">
                    <img src={movie.img} alt="" />
                  </div>
                  <div className="movie__info">
                    <p className="movie__title">{movie.titulo}</p>
                    <div className="movie__description">
                      <div className="movie__record">
                        <IoStar />
                        <p>{movie.nota}</p>
                      </div>
                      <p className="movie__year">{movie.ano}</p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
