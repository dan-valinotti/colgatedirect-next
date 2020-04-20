import React, { FunctionComponent } from 'react';
import {
  DataUsage, Map, EmojiObjects, SentimentVerySatisfied,
} from '@material-ui/icons';
import { Styled } from './_styles';
import { TransformedProduct } from '../../PDPComponent/_types';
import HeroBanner from '../../sections/HeroBanner';
import IconDescription from '../../sections/IconDescription';

type Props = {
  product: TransformedProduct;
};

const ManualToothbrush: FunctionComponent<Props> = ({ product }: Props) => (
  <Styled.Container id="custom-pdp-component">
    <HeroBanner
      title="Brush Smarter"
      subtitle="Our first non-electric connected toothbrush tracks your brushing to help you get a complete clean."
      bgColor="#69d2f9"
      bgUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/M1_model_hero_image_web_2_compressed.png"
      fontColor="#FFFFFF"
      textAlign="left"
      shopNow
      productId={product.id}
    />
    <IconDescription
      icons={[
        {
          icon: <DataUsage />,
          title: 'Smart Coaching',
          subtitle: 'Real-time feedback on your brushing so you won\'t miss a zone',
        }, {
          icon: <Map />,
          title: 'Mouth Mapping',
          subtitle: 'Smart sensors to visualize your brushing and track progress',
        }, {
          icon: <EmojiObjects />,
          title: 'Tips and Tricks',
          subtitle: 'Gain useful knowledge about your oral health by brushing your teeth',
        }, {
          icon: <SentimentVerySatisfied />,
          title: 'Little Victories',
          subtitle: 'Celebrate brushing victories with special offers and badges',
        },
      ]}
      videoUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/connect_app_demo_2.mp4?61273"
    />
  </Styled.Container>
);

export default ManualToothbrush;
