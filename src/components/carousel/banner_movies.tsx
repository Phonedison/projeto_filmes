import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { PiHeartFill } from "react-icons/pi";

const movies = [
  {
    id: 0,
    image: "../../img/divetidamente.jpg",
    title: "Divertidamente",
  },
  { id: 1, image: "../../img/thor.jpg", title: "Thor" },
  { id: 2, image: "../../img/thor.jpg", title: "Thor2" },
];

export const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="banner__container">
        <div className="banner__carousel">
          {/* Indicadores */}
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

          <div
            className="banner__carousel-imgs"
            style={{ perspective: "1000px" }}
          >
            {movies.map((m, index) => {
              // Lógica do cálculo do efeito
              const offset = index - activeIndex;
              const isCenter = index === activeIndex;
              const xPercent = offset * 55;

              return (
                <motion.div
                  key={m.id}
                  className="banner__carousel-img"
                  initial={false}
                  animate={{
                    x: `${xPercent}%`, // Espaçamento horizontal entre itens
                    scale: isCenter ? 1 : 0.8,
                    rotateY: isCenter ? 0 : offset > 0 ? -45 : 45,
                    zIndex: isCenter ? 10 : Math.max(1, 5 - Math.abs(offset)),
                    opacity: Math.abs(offset) > 1 ? 0 : 1, // Esconde itens muito distantes
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    position: "absolute",
                    // position: isCenter ? "relative" : "absolute",
                    cursor: "pointer",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Renderiza o conteúdo apenas no item central para limpeza visual */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        className="banner__content"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
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
                              <h4>{m.title}</h4>
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
                  <img src={m.image} alt={m.title} className="carousel-img" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
