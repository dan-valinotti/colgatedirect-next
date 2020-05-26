import React, { FunctionComponent, useState, useEffect } from 'react';
import { alignContent } from 'styled-system';
import { Styled } from '../ui/NavBarItem/_styles';
import { SortStyled } from './_styles';

const SortProducts: FunctionComponent = () => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Styled.Container
      onFocus={handleMouseOver}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="sort"
    >
      <Styled.RootNavButton
        hovered={hover}
      >
        <h4>Sort by:</h4>
      </Styled.RootNavButton>
      <Styled.SubItemContainer
        onFocus={handleMouseOver}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        hovered={hover}
      >
        <SortStyled.SubItem>
          <span>Low to High</span>
        </SortStyled.SubItem>
      </Styled.SubItemContainer>
    </Styled.Container>
  );
};
export default SortProducts;
