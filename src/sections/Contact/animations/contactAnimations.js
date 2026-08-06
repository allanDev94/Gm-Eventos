const smoothEase = [0.16, 1, 0.3, 1];

export const contactColumnVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const contactListVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.18,
    },
  },
};

export const contactItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};
