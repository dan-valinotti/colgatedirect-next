import React, { FunctionComponent, ReactNode } from 'react';
import { Styled } from './_styles';

type Props = {
  children: ReactNode;
};

const SectionContainer: FunctionComponent<Props> = ({ children }: Props) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);

export default SectionContainer;
