const smoothEase = [0.16, 1, 0.3, 1];

export const clientsHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export const clientsListVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

export const clientItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.58,
      ease: smoothEase,
    },
  },
};
