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
  paddingTop?: number;
  fullWidth?: boolean;
  children: ReactNode;
};

const PageContainer: FunctionComponent<Props> = ({
  size,
  paddingTop = 0,
  children,
  fullWidth = false,
}: Props) => {
  const widthStyle = fullWidth ? {
    paddingTop,
    paddingLeft: 0,
    paddingRight: 0,
  } : {
    paddingTop,
  };

  return (
    <Container maxWidth={size} style={widthStyle}>
      { children }
    </Container>
  );
};

export default PageContainer;
