const FezAnimations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
        delay: 0,
        ease: "anticipate",
        duration: 0.5,
      },
    },
  },
  item: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "anticipate" },
    },
  },
  itemU: {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "anticipate" },
    },
  },
  itemL: {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "anticipate" },
    },
  },
  itemR: {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "anticipate" },
    },
  },
  itemDelay: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "anticipate", delay: 1.5 },
    },
  },
  RatingContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
        delay: 0,
        ease: "anticipate",
        duration: 0.5,
      },
    },
  },
};

export default FezAnimations;
