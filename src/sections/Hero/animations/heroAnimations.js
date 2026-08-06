const smoothEase = [0.16, 1, 0.3, 1];

export const heroBackgroundVariants = {
  hidden: {
    opacity: 0.72,
    scale: 1.08,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.45,
      ease: smoothEase,
    },
  },
};

export const heroContentVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.12,
    },
  },
};

export const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.72,
      ease: smoothEase,
    },
  },
};
