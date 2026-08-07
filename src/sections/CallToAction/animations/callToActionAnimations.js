const smoothEase = [0.16, 1, 0.3, 1];

export const callToActionPanelVariants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.78,
      ease: smoothEase,
      when: "beforeChildren",
      staggerChildren: 0.11,
    },
  },
};

export const callToActionItemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};

export const callToActionButtonsVariants = {
  hidden: {
    opacity: 0,
    x: 26,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.68,
      delay: 0.06,
      ease: smoothEase,
    },
  },
};
