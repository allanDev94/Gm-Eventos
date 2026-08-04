import { motion, useReducedMotion } from "motion/react";

import "./Reveal.css";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function RevealGroup({
  children,
  className = "",
  stagger = 0.12,
  delay = 0.05,
  amount = 0.2,
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount,
      }}
    >
      {children}
    </motion.div>
  );
}

function RevealItem({ children, className = "" }) {
  return (
    <motion.div
      className={`reveal-item ${className}`.trim()}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}

export { RevealGroup, RevealItem };
