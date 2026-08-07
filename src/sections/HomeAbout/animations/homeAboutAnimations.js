const smoothEase = [0.16, 1, 0.3, 1];

export const homeAboutContentVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};

export const homeAboutListVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.14,
      staggerChildren: 0.11,
    },
  },
};

export const homeAboutItemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};
