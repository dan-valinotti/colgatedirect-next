import React, { FunctionComponent, useState, useEffect } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import Link from 'next/link';
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
    >
      <Link
        href={handle !== 'null' ? { pathname: '/product', query: { handle } } : '#'}
        as={handle !== 'null' ? `/products/${handle}` : '#'}
        passHref
      >
        <Styled.RootNavButton
          hovered={hover}
        >
          <h4>{title}</h4>
        </Styled.RootNavButton>
      </Link>
      {products.length > 0 && (
        <Styled.SubItemContainer
          onFocus={handleMouseOver}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          hovered={hover}
        >
          {products.map(({ title: subItemTitle, handle: subItemHandle }, key) => (
            <Link
              href={{ pathname: '/product', query: { handle: subItemHandle } }}
              as={`/products/${subItemHandle}`}
              passHref
              key={key}
            >
              <Styled.SubItem>
                <span>{subItemTitle}</span>
              </Styled.SubItem>
            </Link>
          ))}
        </Styled.SubItemContainer>
      )}
    </Styled.Container>
  );
};

export default NewNavBarItem;
