import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TransformedProduct } from '../../PDPComponent/_types';
import { TestInterface } from './_types';
import HeroBanner from '../../sections/HeroBanner';

type Props = {
  product: TransformedProduct;
};

const ManualToothbrush: FunctionComponent<Props> = ({ product }: Props) => (
  <Styled.Container>
    <HeroBanner
      title="Brush Smarter"
      subtitle="Our first non-electric connected toothbrush tracks your brushing to help you get a complete clean."
      bgColor="#69d2f9"
      bgUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/M1_model_hero_image_web_2_compressed.png"
      fontColor="#FFFFFF"
      textAlign="left"
    />
  </Styled.Container>
);

export default ManualToothbrush;
