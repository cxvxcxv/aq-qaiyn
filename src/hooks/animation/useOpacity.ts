import { useInView } from 'react-intersection-observer';

export function useOpacity({ triggerOnce = true, threshold = 0 } = {}) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const opacityClass = `transition-opacity duration-1000 ${
    inView ? 'opacity-100' : 'opacity-0'
  }`;

  return { ref, opacityClass };
}
