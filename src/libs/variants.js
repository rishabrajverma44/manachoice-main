export const fadeIn = (
  direction = "up",
  delay = 0,
  distance = 30,
  duration = 1.2,
  ease = [0.25, 0.25, 0.25, 0.75]
) => {
  return {
    hidden: {
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: ease,
      },
    },
  };
};
