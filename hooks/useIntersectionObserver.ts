import { useState, useEffect, RefObject } from 'react';

/**
 * A custom hook that detects if an element is visible in the viewport using the Intersection Observer API.
 * @param elementRef - A React ref object pointing to the element to observe.
 * @param options - Configuration options for the IntersectionObserver.
 * @returns A boolean indicating whether the element is intersecting the viewport.
 */
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger the animation only once when the element comes into view
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      // Clean up the observer when the component unmounts
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
