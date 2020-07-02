import React, {
  FunctionComponent, useState, useEffect, useRef,
} from 'react';
import CTAButton from '../CTAButton';
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
    window.addEventListener('scroll', toggleVisibility);
  });

  return (
    <Styled.Container>
      {isButtonVisible && (
      <CTAButton
        id="scroll-to-top-btn"
        color="secondary"
        text={<i className="fa fa-chevron-up" role="presentation" />}
        onClick={scrollToTop}
      />
      )}
    </Styled.Container>
  );
};
export default ScrollToTopButton;
