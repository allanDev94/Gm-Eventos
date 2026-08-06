const smoothEase = [0.16, 1, 0.3, 1];

/* ========================================
   ENCABEZADO
======================================== */

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

/* ========================================
   CUADRÍCULA Y TARJETAS
======================================== */

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

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.68,
      delay,
      ease: smoothEase,
    },
  }),
};

export const serviceCardHover = {
  y: -8,

  transition: {
    duration: 0.35,
    ease: smoothEase,
  },
};

/* ========================================
   MODAL
======================================== */

export const serviceModalBackdropVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

export const serviceModalDialogVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },

  exit: {
    opacity: 0,
    y: 35,
    scale: 0.97,

    transition: {
      duration: 0.28,
      ease: "easeIn",
    },
  },
};

export const serviceModalGalleryVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      delay: 0.12,
      ease: smoothEase,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.18,
    },
  },
};

export const serviceModalContentVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      delay: 0.2,
      ease: smoothEase,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.18,
    },
  },
};

/* Sin desplazamientos para usuarios
   que prefieren menos movimiento */

export const reducedModalVariants = {
  hidden: {
    opacity: 1,
  },

  visible: {
    opacity: 1,
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0,
    },
  },
};
