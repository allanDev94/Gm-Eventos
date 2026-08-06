const smoothEase = [0.16, 1, 0.3, 1];

export const servicesHeaderVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export const servicesHeadingVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const servicesIntroductionVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export const servicesGridVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const serviceCardVariants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.68,
      ease: smoothEase,
    },
  },
};

export const serviceCardHover = {
  y: -8,

  transition: {
    duration: 0.35,
    ease: smoothEase,
  },
};
