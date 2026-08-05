const smoothEase = [0.16, 1, 0.3, 1];

const createStaggerContainer = ({
  staggerChildren = 0.12,
  delayChildren = 0,
} = {}) => ({
  hidden: {},

  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const createFadeSlide = ({
  x = 0,
  y = 0,
  scale = 1,
  duration = 0.65,
} = {}) => ({
  hidden: {
    opacity: 0,
    x,
    y,
    scale,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,

    transition: {
      duration,
      ease: smoothEase,
    },
  },
});

export const ctaContainerVariants = createFadeSlide({
  y: 55,
  scale: 0.97,
  duration: 0.85,
});

export const ctaContentVariants = createStaggerContainer({
  staggerChildren: 0.11,
  delayChildren: 0.15,
});

export const ctaItemVariants = createFadeSlide({
  y: 28,
});

export const ctaActionsVariants = createStaggerContainer({
  staggerChildren: 0.12,
  delayChildren: 0.32,
});

export const ctaActionItemVariants = createFadeSlide({
  x: 38,
});
