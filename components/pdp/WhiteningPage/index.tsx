import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  test?: string;
};

const WhiteningPage : FunctionComponent<Props> = ({ test }: Props) => {
  return (
    <Styled.Container>
      <h1>{`Hello WhiteningPage!`}</h1>
    </Styled.Container>
  );
};

export default WhiteningPage;
  