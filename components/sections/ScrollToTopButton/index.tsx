import React, {
  FunctionComponent, useState, useEffect, useRef,
} from 'react';
import CTAButton from '../../ui/CTAButton';
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
        <Styled.Button onClick={scrollToTop}>
        <div>^</div>
      </Styled.Button>
      )}
    </Styled.Container>
  );
};
/*
<Styled.Button onClick={scrollToTop}>
        <div>To Top</div>
      </Styled.Button>

      <CTAButton
          id="account-page-btn"
          color="secondary"
          text="Scroll To Top"
          onClick={scrollToTop}
        />
*/
export default ScrollToTopButton;
