import { useState } from "react";

import { motion, useReducedMotion } from "motion/react";

import Container from "../../components/Container/Container";

import {
  clientItemVariants,
  clientsHeaderVariants,
  clientsListVariants,
} from "./animations/clientsAnimations";

import { clients } from "./data/clientsData";

import "./Clients.css";

function ClientItem({ client, shouldReduceMotion }) {
  const [hasImageError, setHasImageError] = useState(false);

  const showLogo = Boolean(client.logo) && !hasImageError;

  return (
    <motion.div
      className="clients__item"
      variants={clientItemVariants}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
            }
      }
    >
      <div className="clients__logo-frame">
        {showLogo ? (
          <img
            className="clients__logo"
            src={client.logo}
            alt={client.alt || `Logo de ${client.name}`}
            loading="lazy"
            decoding="async"
            style={{
              "--client-logo-scale": client.scale || 1,
            }}
            onError={() => {
              setHasImageError(true);
            }}
          />
        ) : (
          <span className="clients__fallback">{client.name}</span>
        )}
      </div>
    </motion.div>
  );
}

function Clients() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="clients" aria-labelledby="clients-title">
      <Container>
        <motion.div
          className="clients__header"
          variants={clientsHeaderVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.45,
          }}
        >
          <p className="clients__eyebrow">Experiencia y confianza</p>

          <h2 className="clients__title" id="clients-title">
            Han confiado en nosotros
          </h2>
        </motion.div>

        <motion.div
          className="clients__list"
          variants={clientsListVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          {clients.map((client) => (
            <ClientItem
              key={client.id}
              client={client}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Clients;
