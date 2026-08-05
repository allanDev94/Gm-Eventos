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
  delay = 0,
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
      delay,
      ease: smoothEase,
    },
  },
});

/* ========================================
   QUIÉNES SOMOS
======================================== */

export const storyContentVariants = createStaggerContainer({
  staggerChildren: 0.12,
  delayChildren: 0.08,
});

export const storyItemVariants = createFadeSlide({
  x: -38,
});

export const storyVisualVariants = createStaggerContainer({
  staggerChildren: 0.16,
  delayChildren: 0.12,
});

export const storyGalleryVariants = createFadeSlide({
  x: 55,
  scale: 0.96,
  duration: 0.85,
});

export const storyDetailVariants = createFadeSlide({
  y: 35,
  scale: 0.9,
  duration: 0.7,
  delay: 0.3,
});

export const storyHighlightsVariants = createStaggerContainer({
  staggerChildren: 0.1,
});

export const storyHighlightItemVariants = createFadeSlide({
  y: 26,
  scale: 0.97,
  duration: 0.55,
});

/* ========================================
   NUESTRO COMPROMISO
======================================== */

export const commitmentMediaVariants = createFadeSlide({
  x: -60,
  scale: 0.96,
  duration: 0.8,
});

export const commitmentContentVariants = createStaggerContainer({
  staggerChildren: 0.12,
  delayChildren: 0.18,
});

export const commitmentItemVariants = createFadeSlide({
  x: 40,
});

/* ========================================
   CTA FINAL
======================================== */

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
