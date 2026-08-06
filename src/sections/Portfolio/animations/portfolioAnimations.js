const smoothEase = [0.16, 1, 0.3, 1];

export const portfolioCardHover = {
  y: -6,

  transition: {
    duration: 0.35,
    ease: smoothEase,
  },
};

export const portfolioBackdropVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const portfolioModalVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,

    transition: {
      duration: 0.24,
      ease: "easeIn",
    },
  },
};
