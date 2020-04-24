import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import CTAButton from '../../CTAButton';
import { theme } from '../../../views/theme';

type Props = {
  test?: string;
};

const PageContentSection: FunctionComponent<Props> = ({ test }: Props) => (
  <Styled.Container>
    <CTAButton color="primary" text="Test button" onClick={() => console.log('click')} />
  </Styled.Container>
);

export default PageContentSection;
