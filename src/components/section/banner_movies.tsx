import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { PiHeartFill } from "react-icons/pi";
import { getTopMovies } from "../../scripts/script";

interface Movie {
  id: number;
  title: string;
  backdrop_path?: string;
  poster_path?: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getTopMovies().then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [movies.length, activeIndex]);

  return (
    <>
      <section className="banner__container">
        <div className="banner__carousel">
          {/* Indicadores */}
          <div
            className="banner__carousel-imgs"
            style={{ perspective: "1000px" }}
          >
            {movies.map((movie, index) => {
              // Lógica do cálculo do efeito
              const offset = index - activeIndex;
              const isCenter = index === activeIndex;
              const xPercent = offset * 65;

              return (
                <motion.div
                  key={movie.id}
                  className="banner__carousel-img"
                  initial={false}
                  animate={{
                    x: `${xPercent}%`, // Espaçamento horizontal entre itens
                    scale: isCenter ? 1.2 : 0.8,
                    rotateY: isCenter ? 0 : offset > 0 ? -45 : 45,
                    zIndex: isCenter ? 10 : Math.max(1, 5 - Math.abs(offset)),
                    opacity: Math.abs(offset) > 1 ? 0 : 1, // Esconde itens muito distantes
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    position: "absolute",
                    left: "20%",
                    x: "-50%",
                    cursor: "pointer",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Renderiza o conteúdo apenas no item central para limpeza visual */}
                  <AnimatePresence mode="wait">
                    {isCenter && (
                      <motion.div
                        className="banner__content"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                      >
                        <div className="banner__content-type">
                          <div className="info">
                            <p className="info__item">1h40min</p>
                            <p className="info__item">Action</p>
                            <p className="info__item">2025</p>
                            <p className="info__item">6+</p>
                          </div>
                        </div>
                        <div className="banner__content-info">
                          <div className="info">
                            <div className="info__play">
                              <FaPlay />
                            </div>
                            <div className="info__title">
                              <h4>{movie.title}</h4>
                              <p>
                                Play trailer <strong>2min</strong>
                              </p>
                            </div>
                          </div>
                          <div className="info__heart">
                            <PiHeartFill />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <motion.img
                    animate={{
                      filter: isCenter
                        ? "blur(0) grayscale(0) brightness(1)"
                        : "blur(4px) grayscale(0.4) brightness(0.4)",
                    }}
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                        : "URL_DE_UMA_IMAGEM_PADRAO_AQUI"
                    }
                    alt={movie.title}
                    className="carousel-img"
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="banner__carousel-pointer">
            {movies.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: "pointer" }}
              >
                {activeIndex === index ? (
                  <RiCheckboxBlankCircleFill />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
