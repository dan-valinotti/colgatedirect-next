import React, { FunctionComponent, useState, useEffect } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { useRouter } from 'next/router';

import { Styled } from './_styles';
import { TestInterface } from './_types';

type SubItem = {
  title: string;
  handle: string;
};

type Props = {
  title: string;
  handle: string;
  products: SubItem[];
};

const NewNavBarItem: FunctionComponent<Props> = ({ title, handle, products }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const onItemClick = (destination: string) => {
    if (destination !== 'null') {
      router.push(destination)
        .catch((error) => console.log(error));
    }
  };

  return (
    <Styled.Container
      onFocus={handleMouseOver}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.RootNavButton
        hovered={hover}
        onClick={() => onItemClick(handle)}
      >
        <h4>{title}</h4>
      </Styled.RootNavButton>
      {products.length > 0 && (
        <Styled.SubItemContainer
          onFocus={handleMouseOver}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          hovered={hover}
        >
          {products.map(({ title: subItemTitle, handle: subItemHandle }, key) => (
            <Styled.SubItem
              onClick={() => onItemClick(subItemHandle)}
            >
              <span>{subItemTitle}</span>
            </Styled.SubItem>
          ))}
        </Styled.SubItemContainer>
      )}
    </Styled.Container>
  );
};

export default NewNavBarItem;
