import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';


const ScrollToTopButton: FunctionComponent = () => {
  const goToTop = () => {

  };
  return (
    <Styled.Container>
      <Styled.Button onClick={() => goToTop()}>
        <div>To Top</div>
      </Styled.Button>
    </Styled.Container>
  );
};

export default ScrollToTopButton;
