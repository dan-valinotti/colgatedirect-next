import React, {
  FunctionComponent, useState, useEffect, useRef,
} from 'react';
import { Styled } from './_styles';


const ScrollToTopButton: FunctionComponent = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300 && !isButtonVisible) {
      setIsButtonVisible(true);
    } else if (window.pageYOffset <= 300 && isButtonVisible) {
      setIsButtonVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);
  });

  return (
    <Styled.Container>
      {isButtonVisible && (
      <Styled.Button onClick={() => scrollToTop}>
        <div>To Top</div>
      </Styled.Button>
      )}
    </Styled.Container>
  );
};

export default ScrollToTopButton;
