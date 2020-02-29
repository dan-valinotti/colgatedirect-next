import React, { FunctionComponent, ReactNode } from 'react';
import { Container } from '@material-ui/core';

export enum PageSize {
  xsmall = 'xs',
  small = 'sm',
  medium = 'md',
  large = 'lg',
  xlarge = 'xl'
}

type Props = {
  size: PageSize;
  paddingTop: number;
  children: ReactNode;
};

const PageContainer: FunctionComponent<Props> = ({ size, paddingTop, children }: Props) => (
  <Container maxWidth={size} style={{ paddingTop }}>
    { children }
  </Container>
);

export default PageContainer;
