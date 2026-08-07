import { ArrowUpRight } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

import {
  homeAboutContentVariants,
  homeAboutItemVariants,
  homeAboutListVariants,
} from "./animations/homeAboutAnimations";

import { homeAboutValues } from "./data/homeAboutData";

import "./HomeAbout.css";

function HomeAbout() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="home-about" aria-labelledby="home-about-title">
      <Container>
        <div className="home-about__layout">
          <motion.div
            className="home-about__content"
            variants={homeAboutContentVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <p className="home-about__eyebrow">Sobre GM Eventos</p>

            <h2 className="home-about__title" id="home-about-title">
              Producción cercana, profesional y adaptada a cada evento
            </h2>

            <p className="home-about__description">
              Nos involucramos en cada proyecto para transformar una idea en una
              experiencia bien coordinada, memorable y pensada para cada
              cliente.
            </p>

            <Button to="/nosotros" variant="secondary">
              <span>Conoce a GM Eventos</span>

              <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
            </Button>
          </motion.div>

          <motion.div
            className="home-about__values"
            variants={homeAboutListVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {homeAboutValues.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="home-about__value"
                  key={value.id}
                  variants={homeAboutItemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                >
                  <div className="home-about__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3>{value.title}</h3>

                    <p>{value.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HomeAbout;
