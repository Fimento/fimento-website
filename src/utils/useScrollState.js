import { useState, useEffect, useRef } from 'react';

const SCROLL_SENSIBILITY = 10;

const useScrollState = () => {
  const currentPosition = useRef(null);

  const [isOnTop, setIsOnTop] = useState(true);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const handleScroll = () => {
    const newPosition = global.scrollY;

    if (newPosition > currentPosition.current) {
      setIsScrollingDown(true);
      setIsScrollingUp(false);
    } else if (newPosition < currentPosition.current) {
      setIsScrollingDown(false);
      setIsScrollingUp(true);
    }
    if (newPosition < SCROLL_SENSIBILITY) setIsOnTop(true);
    else setIsOnTop(false);

    currentPosition.current = global.scrollY;
  };

  useEffect(() => {
    handleScroll();
    global.addEventListener('scroll', handleScroll);
    currentPosition.current = global.scrollY;

    return () => global.removeEventListener('scroll', handleScroll);
  }, []);

  return { isOnTop, isScrollingDown, isScrollingUp };
};

export default useScrollState;
